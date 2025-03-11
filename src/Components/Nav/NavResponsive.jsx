import { useContext, useEffect } from "react";
import "./NavResponsive.css";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router";
const NavResponsive = () => {
  
  const arribaEnScroll = () => {
    const top = document.querySelector(".nav-responsive");
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 0){
          top.classList.add("top")
        }else{
          top.classList.remove("top")
          }
        })
    }
    useEffect(()=>{arribaEnScroll()},[]);  
 
    const { state } = useContext(CartContext);
  const { cart } = state;
  //ver de pasar por contexto, la usa también Nav
  const quantity = cart
    .map((item) => item.cantidad)
    .reduce((acc, cur) => acc + cur, 0);

    const handleCartIcon = () => {
    document.querySelector("#close-btn").click()
    }
  return (
    <nav className="nav-responsive">
      <Link to={"/"}>
        <img className="nav-logo" src="./public/logoOriginal.png" alt="logo" />
      </Link>
      <button className="menu-button" popoverTarget="menu">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill="#212121"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
          <div className="cart-badge-menu">
            {quantity > 0 && <span>{quantity}</span>}
          </div>
      </button>
      <div popover="auto" role="menu" id="menu">
          <button
            id="close-btn"
            popoverTarget="menu"
            popoverTargetAction="hide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#212121"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
          <ul>
            <li>
              <a href="#">Ofertas</a>
            </li>
            <li>
              <a href="#">Todas las Categorías</a>
            </li>
            <li>
              <a href="#">Regalos y Paquetes</a>
            </li>
            <li>
              <a href="#">Nuestras Marcas</a>
            </li>
            <li>
              <a href="#">Sobre Nosotros</a>
            </li>
            <li style={{ textAlign: "center", margin: "20px" }}>
              <div className="cart-responsive-icons">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#414141"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#414141"
                  >
                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                  </svg>
                </a>
                <Link to={"/cart"} id="cartIcon" onClick={handleCartIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#414141"
                  >
                    <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                  </svg>
                </Link>
                <div className="cart-badge">
                    {quantity > 0 && <span>{quantity}</span>}
                  </div>
              </div>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default NavResponsive;
