import React from 'react';
import facebook from './assets/socialmedia.png';
import twitter from './assets/socialmedia-1.png';
import instagram from './assets/socialmedia-2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Booking from './Booking';

const Contact = () => {
  return (
    <section>
      <div className="card text-bg-dark">
        <img src='https://indiarestaurant.co.in/assets/images/backgrounds/CONTACT-1.JPG' className="card-img" alt="..." />
        <div className="card-img-overlay restaurant-center ">
          <div className='text-center'>
            <h1 className="card-text">Contact Us</h1>
          </div>
        </div>
      </div>

      <div className='container-fluid p-5'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <h6 className='text-secondary'>Feel free to reach us.</h6>
            <h6 className='text-secondary'>We are all ears for your feedback and queries. Contact us now, and we will get back to you.</h6>
            <div className='row py-5'>
              <div className='col-12 col-md-5'>
                <div className='home-welcome'>
                  <h5>Our Addresses</h5>
                  <p>34, Karl Marx Sarani, Khidderpore, Kolkata - 700023</p>
                  <p>9, Kazi Nazrul Islam Avenue
                    Kaikhali Crossing,
                    Kolkata- 700052</p>
                </div>
                <div>
                  <h5>Follow Us</h5>
                  <div className='d-flex justify-content-start'>
                    <div>
                      <a href="https://www.facebook.com/yourfacebookpage" target="_blank" ><img src={facebook} className='w-50' /></a>
                    </div>
                    <div>
                      <a href="https://x.com/home?lang=en" target="_blank" ><img src={twitter} className='w-50' /></a>
                    </div>
                    <div>
                      <a href="https://www.instagram.com/" target="_blank" ><img src={instagram} className='w-50' /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-2'></div>
              <div className='col-12 col-md-5'>
                <div className='home-welcome'>
                  <h5>Email Id:</h5>
                  <p>info@indiarestaurant.in</p>
                </div>
                <div className='home-welcome'>
                  <h5>Call Us Now</h5>
                  <h5>Khidderpore</h5>
                  <p><FontAwesomeIcon icon={faPhone} /> +91 8481848484</p>
                  <p><FontAwesomeIcon icon={faPhone} /> +91 8420533005</p>
                  <h5>Kaikhali</h5>
                  <p><FontAwesomeIcon icon={faPhone} /> +033 4804 9142</p>
                  <p><FontAwesomeIcon icon={faPhone} /> +91 99039 80011</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 p-5'>
            <div className='Timings p-4'>
              <div className='border border-white p-2 border-opacity-75'>
                <div className='border border-white p-2 border-opacity-75'>
                  <h1>Opening Times</h1>
                  <div className='row p-5 '>
                    <div className='line-border d-flex justify-content-between mb-3'>
                      <span className='d-flex justify-content-start'>Mon:</span>
                      <span className='d-flex justify-content-end'>11:00 AM – 11:00 PM</span>
                    </div>
                    <div className='line-border d-flex justify-content-between mb-3'>
                      <span className='d-flex justify-content-start'>Tue:</span>
                      <span className='d-flex justify-content-end'>11:00 AM – 11:00 PM</span>
                    </div>
                    <div className='line-border d-flex justify-content-between mb-3'>
                      <span className='d-flex justify-content-start'>Wed:</span>
                      <span className='d-flex justify-content-end'>11:00 AM – 11:00 PM</span>
                    </div>
                    <div className='line-border d-flex justify-content-between mb-3'>
                      <span className='d-flex justify-content-start'>Thu:</span>
                      <span className='d-flex justify-content-end'>11:00 AM – 11:00 PM</span>
                    </div>
                    <div className='line-border d-flex justify-content-between mb-3'>
                      <span className='d-flex justify-content-start'>Fri:</span>
                      <span className='d-flex justify-content-end'>11:00 AM – 11:00 PM</span>
                    </div>
                    <div className='line-border d-flex justify-content-between mb-3'>
                      <span className='d-flex justify-content-start'>Sat:</span>
                      <span className='d-flex justify-content-end'>11:00 AM – 11:00 PM</span>
                    </div>
                    <div className='line-border d-flex justify-content-between mb-3'>
                      <span className='d-flex justify-content-start'>Sun:</span>
                      <span className='d-flex justify-content-end'>11:00 AM – 11:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Booking />

    </section>
  );
};

export default Contact;