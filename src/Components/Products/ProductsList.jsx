import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import './ProductsList.css'
const ProductsList = () => {
  const { state, addToCart } = useContext(CartContext);
  return (
    <div className="productsList-container">
      {state.products.slice(0,4).map((product) => (
        <div key={product.id} className="productsList">
          <img src={product.img} alt={product.nombre} />
          <span>{product.nombre}</span>
          <span>${(product.precio).toLocaleString("de-DE")}</span>  
          <button onClick={()=>addToCart(product)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
