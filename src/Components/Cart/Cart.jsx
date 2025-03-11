import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import './Cart.css'
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router";
const Cart = () => {
    const { state, addToCart, removeFromCart, removeAllFromCart, clearCart, checkOut } = useContext(CartContext);
    const {cart} = state
    const precioTotal = cart.reduce(
      (acc, curr) => acc + curr.cantidad * curr.precio,
      0
    );
  return (
    <div className="cart-container">
    {
      cart.length > 0 
        ? <SectionTitle h2={"tus"} span={"Compras"}></SectionTitle> 
        : <>
          <SectionTitle h2={"...tu carrito está vacío"}></SectionTitle>
          <Link to="/ProductsPage">
          <button className="cart-button">explorar productos</button>
          </Link>
          </>
        
      }
      {cart.length > 0 && <span className="precioTotal"><span>Precio total:</span>${precioTotal.toLocaleString("de-DE")}</span>}
      <div className="cartActions-container">
      {cart.length > 0 && <button onClick={()=>clearCart()} className="clearCart-button">limpiar el carrito</button>}
      {cart.length > 0 && <button onClick={()=>checkOut()}>finalizar compra</button>}
      </div>
      {state.cart.map((product) => (
        <div key={product.id} className="cartProducts">
          <img src={product.img} alt={product.nombre} />
          <span>{product.nombre}</span>
          <span>${(product.precio * product.cantidad).toLocaleString("de-DE")}</span>
          <span>cantidad {state.cart.find((item)=>item.id === product.id)?.cantidad}</span>
          <div className="cartButtons">
          <button onClick={()=>addToCart(product)} title="agregar cantidad">➕</button>
          <button onClick={()=>removeFromCart(product)} title="quitar del carrito">➖</button>
          </div>
          <button onClick={()=>removeAllFromCart(product)} title="quitar todos del carrito">❌</button>
        </div>
      ))}
  </div>
  );
};
export default Cart;