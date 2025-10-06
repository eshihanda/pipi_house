import React from 'react';
import farmer2 from '../Assets/farmer2.png';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../Styles/ContactPage.css'

const ContactHeroSection = () => {
  return (
    <>
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
    <section className='contact-section py-5'>
      <div className='container'>
        <div className='row g-5 align-items-start'>
          <div className='col-md-5 contact-info'>
            <h3 className='mb-3'>Have a question or need help placing an order? Reach out...</h3>
            <ul className='list-unstyled'>
              <li className='mb-4 d-flex  align-items-center'>
                <FaEnvelope className='me-3 fs-4' />
                <div>
                  <strong>Email:</strong>
                  <p className="mb-0">pipihousefarm@gmail.com</p>
                </div>
              </li>
              <li className="mb-4 d-flex align-items-center">
                <FaPhoneAlt className="me-3 fs-4" />
                <div>
                  <strong>Phone:</strong>
                  <p className="mb-0">+254721840512</p>
                </div>
              </li>
              <li className="mb-4 d-flex align-items-center">
                <FaMapMarkerAlt className="me-3 fs-4" />
                <div>
                  <strong>Address:</strong>
                  <p className="mb-0">45 Green Valley Road, Nairobi, Kenya</p>
                </div>
              </li>
            </ul>
          </div>
          <div className='col-md-7 contact-form'>
            <h3 className='fw-bold mb-4'>Send Us a Message</h3>
            <form className='contact-form'>
              <div className='mb-3'>
                <label htmlFor="name" className='form-label fw-semibold'>Full Name</label>
                <input type="text" className='form-control' id='name'
                placeholder='Enter your full name' required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Your Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
               <button type="submit" className="btn btn-success px-4 py-2 rounded-pill fw-semibold">
                Send us a message
               </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactHeroSection;
