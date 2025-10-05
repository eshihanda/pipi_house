import React from 'react'
import '../Styles/About.css'
import Footer from '../Components/Footer'

function AboutPage() {
  const services = [
    {
      img: "truck.jpg",
      title: "Reliable Export",
      descr: "On-time, professionally handled logistics — from our farms to your destination. We partner with trusted shipping lines and freight forwarders to ensure your orders arrive fresh and intact. Our experienced team manages all export documentation, customs clearance, and compliance with international trade regulations, making cross-border transactions seamless for our clients."
    },
    {
      img: "growth.jpg",
      title: "SUSTAINABLE GROWN",
      descr: "We use eco-friendly and regenerative farming practices that protect the soil and future harvests. Our commitment to sustainability means working directly with local farmers who employ organic methods, water conservation techniques, and natural pest management. Every product we export is cultivated with respect for the environment and the communities that depend on the land."
    },
    {
      img: "fruit.jpg",
      title: "Top-Grade Quality",
      descr: "We maintain rigorous quality control at every stage—from harvesting to packaging—so our clients always receive the best. Our products undergo thorough inspections, grading, and sorting to meet international food safety standards including HACCP and GlobalGAP certifications. We carefully select only premium-grade cereals and fruits, ensuring consistent quality that builds long-term trust with our global partners."
    }
  ]
  return (
    <div className='about'>
      <div className="hero-about">
        <img src="./heroabout.jpg" alt="" />
        <div className='hero-about-text'>
          <p>
            <span>ABOUT US</span>
            <span>Why We're The Trusted Choice</span>
          </p>
          <span>
            At Pipi House, we’re more than just exporters — we’re caretakers of the land and the produce it gives us.
            Our journey begins in the soil and ends on your table, guided by values of quality, sustainability, and trust.
          </span>
        </div>
      </div>
      <div className="services-about">
        <div className="services-head">
          <p className='services-text'>
            <span>What We Offer</span>
            <span>Our Services</span>
          </p>
        </div>
        <div className="servicess">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-item ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
            >
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.descr}</p>
              </div>
              <div className="service-image">
                <img src={service.img} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage