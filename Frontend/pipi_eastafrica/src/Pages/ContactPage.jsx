import React from 'react';
import farmer2 from '../Assets/farmer2.png';

const ContactHeroSection = () => {
  return (
    <section className="contact-hero-section">
      <div className="row g-0 align-items-stretch">
        
        <div className="col-lg-6 col-md-6 contact-text px-5 py-5">
          <h2 className="fw-bold text-success mb-3">We would Love to Hear From You</h2>
          <p className="lead text-dark">
            At <span className="text-success fw-semibold">PipiHouse</span>, every message feels like a visit from a friend.  
            Whether you would like to ask about our fresh farm produce, delivery options,  
            or simply share how our products brightened your day.We are always happy to connect with you.
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-start gap-3 mt-4">
            <a href="/about" className="btn btn-success px-4 py-2 rounded-pill">
              More About Us
            </a>
            <div>
              <p className="m-0 fw-semibold">
                <span className="d-block">Give us a call:</span>
                <span className="fs-5 text-success">+254721840512</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-lg-6 col-md-6 p-0">
          <img
            src={farmer2}
            alt="Contact us at the farm"
            className="img-fluid contact-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
