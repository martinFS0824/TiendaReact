import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext(null);
const CartInitialState = {
  products: [],
  cart: [],
};
const CartReducer = (state, action) => {
  switch (action.type) {
    case "AddItem": {
      const newCartItem = state.products.find(
        (product) => product.id === action.payload
      );
      const itemInCart = state.cart.find((item) => item.id === action.payload);
      return itemInCart
        ? {
            ...state,
            itemCounter: state.itemCounter + 1,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...newCartItem, cantidad: item.cantidad + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newCartItem, cantidad: 1 }],
          };
    }

    case "RemoveItem":
      const itemToDelete = state.cart.find(
        (item) => item.id === action.payload
      );
      return itemToDelete.cantidad > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...itemToDelete, cantidad: item.cantidad - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    case "RemoveAllItems":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "ReadState":
      return action.payload;
    case "ClearCart":
      return { ...state, cart: [] };
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, CartInitialState);
  const addToCart = async (product) => {
    const existingItem = state.cart.find((item) => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, existingItem.cantidad + 1);
    } else {
      try {
        await axios.post("http://localhost:5000/cart", {
          ...product,
          cantidad: 1,
        });
      } catch (error) {
        console.log("error al agregar al carrito", error);
      }
    }
    dispatch({ type: "AddItem", payload: product.id });
  };
  const updateQuantity = async (id, quantity) => {
    try {
      await axios.patch("http://localhost:5000/cart/" + id, {
        cantidad: quantity,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const removeFromCart = (product) => {
   if (product.cantidad > 1) {
    updateQuantity(product.id, product.cantidad - 1)
   } else {
    try {
       axios.delete("http://localhost:5000/cart/" + product.id);
    } catch (error) {
      console.log(error);
      
    }
   }
    dispatch({ type: "RemoveItem", payload: product.id });
  }
  
  const removeAllFromCart = (product) => {
    axios.delete("http://localhost:5000/cart/" + product.id);
    dispatch({ type: "RemoveAllItems", payload: product.id });
  };
  const clearCart = () => {
    if (clearCart) {
      const response = window.confirm("¿Querés cancelar tu compra?");
      if (response) {
        state.cart.map(item => axios.delete('http://localhost:5000/cart/'+item.id))
        dispatch({ type: "ClearCart" });
      }
    }
  };
  const checkOut = () => {
      const response = window.alert("Gracias por confiar en nosotros");
      console.log(JSON.parse(localStorage.getItem('carrito')))
      localStorage.clear()
      state.cart.map(item => axios.delete('http://localhost:5000/cart/'+item.id))
      dispatch({ type: "ClearCart" });
  };
  const updateState = async () => {
    try {
      const productsResponse = await axios.get("http://localhost:5000/products");
      const products = productsResponse.data;
      const cartResponse = await axios.get("http://localhost:5000/cart");
      const cart = cartResponse.data;
      dispatch({ type: "ReadState", payload: { products, cart } });
    } catch (error) {
      console.log("error al cargar los productos ", error);
    }
  };
  const cartToLocal = () => {
    localStorage.setItem('carrito', JSON.stringify(state.cart))
  }
  useEffect(() => {
    updateState();
  }, []);
  useEffect(()=>{
    cartToLocal()
  }, [state.cart])
  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        clearCart,
        checkOut
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
