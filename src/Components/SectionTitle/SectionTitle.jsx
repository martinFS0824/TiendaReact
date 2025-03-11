import './SectionTitle.css'
const SectionTitle = (props)=> {
    return (
        <div className='section-title'>
            <h2>{props.h2}</h2><h2>{props.span}</h2>
        </div>
    )
}
export default SectionTitle;