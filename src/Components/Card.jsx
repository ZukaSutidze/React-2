import './Card.css'

const Card = ({ Img, names, desc , color , Learn , border }) => {
    return (
        <div className={`card ${color}`} >
            <img src={Img} alt="" />
            <p className='names'>{names}</p>
            <p className='Desc'>{desc}</p>
            <button className={`${Learn} ${border} `}>Learn More</button>
        </div>
    )

}


export default Card