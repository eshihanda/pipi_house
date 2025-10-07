import React from 'react';
import '../Styles/Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      rating: 5, 
      text: "We've been sourcing cereals from them for over three years, and the quality has been consistently excellent. Shipments always arrive on time.",
      customer: "Marek K., Importer",
      location: "Poland",
    },
    {
      id: 2,
      rating: 5,
      text: "Outstanding service and fresh tropical fruits. Our customers love the quality, and the communication is always top-notch.",
      customer: "Elena P., Distributor",
      location: "Spain",
    },
    {
      id: 3,
      rating: 4,
      text: "Reliable supply of organic legumes. There was a minor delay once, but it was quickly resolved. Overall, very satisfied.",
      customer: "Chen L., Wholesaler",
      location: "Singapore",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span 
          key={i} 
          className="star" 
          style={{ color: i < rating ? 'gold' : 'lightgray' }} 
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="star-rating">{renderStars(testimonial.rating)}</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-customer">
              <strong>{testimonial.customer}</strong> <br />
              <span className="testimonial-location">{testimonial.location}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;