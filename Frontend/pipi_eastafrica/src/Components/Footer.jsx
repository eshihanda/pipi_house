import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <footer className='mt-3 pt-5 pb-3 text-white footer' style={{backgroundColor: '#556B2F'}}>
        <div className='container'>
            <div className='row text-center text-md-start'>
                <div className='col-md-4 mb-4'>
                    <h1 className='footer-brand'>Pipi <span>House</span></h1>
                    <p> <i>.Farming since the 2000s.</i></p>
                </div>
                <div className="col-md-4 mb-4">
                    <h5 className="footer-heading">Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#products">Our Products</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#faq">FAQs</a></li>
                    </ul>
                </div>
                <div className='col-md-4 mb-4'>
                    <h5 className='footer-heading'>Contact Us</h5>
                    <p>Email: <a href="mailto:info@pipihouse.com">info@pipihouse.com</a></p>
                    <p>Phone: +254 721 840 512</p>
                    <p>Location: Nairobi, Kenya</p>
                </div>
            </div>

            <hr className='border-success'/>
            <p className='text-center mb-2'>  © {new Date().getFullYear()} PipiHouse. All rights reserved.</p>
            <p className='text-center'>Handcrafted by yours truly; Monica and the team</p>
        </div>
    </footer>
  )
}

export default Footer