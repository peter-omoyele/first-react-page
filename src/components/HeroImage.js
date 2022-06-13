import image from './image.jpg'

export default function HeroImage() {
    return (
        <div className='hero-container'>
            <img className='hero-image' src={image} alt="" />
        </div>
    )
    
};