import { Link } from 'react-router';
import './Hero.css'
const Hero = () =>{
    return (
        <div className="hero">
        <div>
        <h2><mark>Disfrutá de nuestras mejores ofertas</mark></h2>
        <h3><mark>Descubrí nuestras marcas</mark></h3>
        <Link to={'/ProductsPage'}>
        <button>ver productos</button>
        </Link>
        </div>
      </div>
    )
}

export default Hero;