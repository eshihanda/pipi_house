import '../Styles/HeroSection.css'

function HeroSection() {
    const offers = [
        {
            img: "./offerimg.jpg",
            title: "Locally Sourced, Globally Delivered",
            descr: "We partner with trusted farmers to bring you the finest cereals and fruits from our fertile lands to markets worldwide."
        },
        {
            img: "./world.jpg",
            title: "Exporting Excellence",
            descr: "From quality inspection to international shipping, we ensure every order meets global standards of freshness and reliability."
        },
        {
            img: "./sustain.jpg",
            title: "Committed to Sustainability",
            descr: "Our operations prioritize eco-friendly practices, supporting local communities and protecting the environment."
        }
    ]
    return (
        <div className="hero-section">
            <div className="hero-img">
                <img src="./herobg.jpg" alt="herosection image" />
                <div className='hero-text'>
                    <p>
                        <span className='hero-text-bold'>FROM OUR FARMS TO THE WORLD</span>
                        <span className='hero-text-small'>
                            We specialize in the exportation of high-quality cereals and fresh fruits, ensuring international standards, timely delivery, and farm-to-market transparency.
                        </span>
                    </p>
                </div>
            </div>
            <div className="offers">
                {offers.map(offer => (
                    <div className="offer-container">
                        <div className='offer-img'><img src={offer.img} alt="" /></div>
                        <div className="offer-description">
                            <p className='offer-title'>{offer.title}</p>
                            <p>{offer.descr}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default HeroSection;