import './IconCard.css'
function IconCard(props){
    return (
        
        <figure>
            <img src={props.img} alt={props.nombre} />
            <figcaption>
                <h4>{props.nombre}</h4>
                <p>{props.texto}</p>
            </figcaption>
        </figure>
        
    )
}

export default IconCard;