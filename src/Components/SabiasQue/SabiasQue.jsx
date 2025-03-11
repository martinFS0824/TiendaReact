import './SabiasQue.css'
const SabiasQue = () => {
    return (
        <>
        <div className='sabiasQue-container'>
        <div className='sbaiasQue-list'>
        <h3>Tener una mascota puede tener muchos beneficios para la salud.</h3>
        <ul>
            <li><img className='check' src="./public/check.png" alt="check" />Mejora la salud del corazón</li>
            <li><img className='check' src="./public/check.png" alt="check" />Refuerza el sistema inmunológico</li>
            <li><img className='check' src="./public/check.png" alt="check" />Ayuda a gastar energía y descansar mejor</li>
            <li><img className='check' src="./public/check.png" alt="check" />Ayuda a los niños con sus habilidades emocionales y sociales</li>
            <li><img className='check' src="./public/check.png" alt="check" />Disminuye el estrés y la sensación de soledad</li>
            <li><img className='check' src="./public/check.png" alt="check" />Promueve la convivencia</li>
        </ul>
        <button>más información</button>
        </div>
        <img src="./public/juguete.jpg" alt="uvas" />
        </div>
        </>
    )
}
export default SabiasQue;