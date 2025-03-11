import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./ProductsPage.css";
import SectionTitle from "../SectionTitle/SectionTitle";
const ProductsPage = () => {
  const { state, addToCart } = useContext(CartContext);
  return (
    <div className="productsPage">
        <SectionTitle h2="Nuestros" span="Productos"></SectionTitle>
      <div className="productsPage-container">
        {state.products.slice(4).map((product) => (
          <div key={product.id} className="productsPageList">
            <div className="img-container">
              <img src={product.img} alt={product.nombre} />
            </div>
            <span>{product.nombre}</span>
            <span>${(product.precio).toLocaleString("de-DE")}</span>
            <button onClick={() => addToCart(product)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
