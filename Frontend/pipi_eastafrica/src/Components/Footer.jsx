import React from 'react'
import logo from '../assets/pip-logo.png'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='footer-main'>
                {/* Logo Section */}
                <div className='footer-section logo-section'>
                    <img src={logo} alt="Pipi House Logo" className='footer-logo' />
                    <p className='footer-description'>
                        Your trusted source for fresh tropical fruits, organic legumes, and quality vegetables.
                    </p>
                </div>
                
                {/* Quick Links Section */}
                <div className='footer-section'>
                    <h5 className='footer-heading'>Quick Links</h5>
                    <ul className='footer-links'>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/products">Our Products</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                
                {/* Contact Us Section */}
                <div className='footer-section'>
                    <h5 className='footer-heading'>Contact Us</h5>
                    <div className='contact-details'>
                        <div className='contact-item'>
                            <span className='contact-label'>Email:</span>
                            <a href="mailto:info@pipihouse.com">info@pipihouse.com</a>
                        </div>
                        <div className='contact-item'>
                            <span className='contact-label'>Phone:</span>
                            <span>+254 721 840 512</span>
                        </div>
                        <div className='contact-item'>
                            <span className='contact-label'>Location:</span>
                            <span>Nairobi, Kenya</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer-divider'></div>
            
            {/* Bottom Section */}
            <div className='footer-bottom'>
                <p className='footer-copyright'>
                    © {new Date().getFullYear()} PipiHouseEastAfrica. All rights reserved.
                </p>
                <p className='footer-tagline'>
                    Handcrafted by yours truly; Monica and the team
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer