
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./ProductsPage.css";
//Prueba tomar datos de db.json

const ProductsFromDb = () => {
    //pasar por contexto todo useState ¿fetch?
    const [product, setProduct] = useState([]);
    const {state, addToCart} = useContext(CartContext)
    const fetchProduts = async() =>{
            const response = await fetch('http://localhost:5000/products')
            const data = await response.json()
            console.log(data);
            
           setProduct(data)
    }

    useEffect(()=>{fetchProduts()}, [])
    
    const productosObtenidos = product.map((producto)=>{
        return (
                <div key={producto.id} className="productsPageList">
                    <div className="img-container">
                        <img src={producto.img} alt={producto.nombre} />
                    </div>
                    <span>{producto.nombre}</span>
                    <span>${(producto.precio).toLocaleString("de-DE")}</span>
                    <button onClick={()=> addToCart(producto.id)}>agregar</button>
                </div>
            
        )
    })
    
    return (
        <div className="productsPage">
            <SectionTitle h2="Productos" span="db.json"></SectionTitle>
            <div className="productsPage-container">  
                {productosObtenidos}
            </div>
        </div>
    )
    
}

export default ProductsFromDb;