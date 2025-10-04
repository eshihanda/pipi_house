import React from 'react'
import farmer from '../Assets/farmer.jpeg'
import '../Styles/Faq.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Faq = () => {
  return (
    <div className='container-md my-5 faq-section'>
      <div className='text-center'>
        <h2>Frequently Asked Questions</h2>
        <p className='lead text-muted'>
          A quick glance at what customers inquire about our products
        </p>
      </div>

      <div className='row my-5 g-5 justify-content-around align-items-center'>
        <div className='col-6 col-lg-4'>
          <img src={farmer} className='img-fluid rounded' alt='fresh beans from farm' />
        </div>

        <div className='col-lg-6'>
          <div className='accordion' id='faq-accordion'>
            
            {/* Q1 */}
            <div className='accordion-item'>
              <h2 className='accordion-header' id='header-1'>
                <button
                  className='accordion-button'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-1'
                  aria-expanded='true'
                  aria-controls='faq-1'
                >
                  Where does your produce come from?
                </button>
              </h2>
              <div
                id='faq-1'
                className='accordion-collapse collapse show'
                aria-labelledby='header-1'
                data-bs-parent='#faq-accordion'
              >
                <div className='accordion-body'>
                  <p>
                    All of our fruits, vegetables, and pantry items are grown or made right here on our family farm. <br />
                    When needed, we may partner with trusted nearby farms that follow the same organic and sustainable practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Q2 */}
            <div className='accordion-item'>
              <h2 className='accordion-header' id='header-2'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-2'
                  aria-expanded='false'
                  aria-controls='faq-2'
                >
                  Are your products organically grown?
                </button>
              </h2>
              <div
                id='faq-2'
                className='accordion-collapse collapse'
                aria-labelledby='header-2'
                data-bs-parent='#faq-accordion'
              >
                <div className='accordion-body'>
                  <p>
                    Yes, most of our products are grown organically. We use natural fertilizers and sustainable farming practices to protect the soil and ensure healthy crops. <br />
                    For transparency, we also provide farm traceability for bulk orders upon request.
                  </p>
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div className='accordion-item'>
              <h2 className='accordion-header' id='header-3'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-3'
                  aria-expanded='false'
                  aria-controls='faq-3'
                >
                  Can I buy your products locally?
                </button>
              </h2>
              <div
                id='faq-3'
                className='accordion-collapse collapse'
                aria-labelledby='header-3'
                data-bs-parent='#faq-accordion'
              >
                <div className='accordion-body'>
                  <p>
                    Absolutely. While we mainly export, we also sell locally through selected distributors and markets. <br />
                    You can reach out to us directly to find the nearest location or place a custom order.
                  </p>
                </div>
              </div>
            </div>

            {/* Q4 */}
            <div className='accordion-item'>
              <h2 className='accordion-header' id='header-4'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-4'
                  aria-expanded='false'
                  aria-controls='faq-4'
                >
                  Do you accept bulk or customized orders?
                </button>
              </h2>
              <div
                id='faq-4'
                className='accordion-collapse collapse'
                aria-labelledby='header-4'
                data-bs-parent='#faq-accordion'
              >
                <div className='accordion-body'>
                  <p>
                    Yes, we do. Whether you need a few cartons or several containers, our team can adjust quantities and packaging to match your business needs. <br />
                    We are flexible and happy to discuss special arrangements.
                  </p>
                </div>
              </div>
            </div>

            {/* Q5 */}
            <div className='accordion-item'>
              <h2 className='accordion-header' id='header-5'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-5'
                  aria-expanded='false'
                  aria-controls='faq-5'
                >
                  How can I contact you for inquiries or orders?
                </button>
              </h2>
              <div
                id='faq-5'
                className='accordion-collapse collapse'
                aria-labelledby='header-5'
                data-bs-parent='#faq-accordion'
              >
                <div className='accordion-body'>
                  <p>
                    You can reach us easily through our website’s contact form, email, or WhatsApp. <br />
                    We respond quickly and are always happy to help with product details, shipping, or partnership inquiries.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
