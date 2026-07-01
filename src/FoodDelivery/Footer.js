import React from 'react';
import logo from './assets/Cheff.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (

    <footer className='container-fluid  bg-dark text-white py-5'>
      <div className='row text-center home-welcome'>
        <div className='col-12 col-md-3'>
          <img style={{ width: '100px' }} src={logo} alt="Logo" />
          <p>India Restaurant is known for creating unforgettable food experiences. We believe that food is therapy and try to put up a smile on your face with our culinary skills.</p>
        </div>
        <div className='col-12 col-md-3'>
          <h5>Our Addresses</h5>
          <p>34, Karl Marx Sarani, Khidderpore, Kolkata - 700023</p>
          <p>9, Kazi Nazrul Islam Avenue
            Kaikhali Crossing,
            Kolkata- 700052</p>
        </div>
        <div className='col-12 col-md-3'>
          <h5>Business Hours</h5>
          <p>Mon: 11:00 AM – 11:00 PM</p>
          <p>Tue: 11:00 AM – 11:00 PM</p>
          <p>Wed: 11:00 AM – 11:00 PM</p>
          <p>Thu: 11:00 AM – 11:00 PM</p>
          <p>Fri: 11:00 AM – 11:00 PM</p>
          <p>Sat: 11:00 AM – 11:00 PM</p>
          <p>Sun: 11:00 AM – 11:00 PM</p>
        </div>
        <div className='col-12 col-md-3'>
          <h5>Contact Details</h5>
          <p><FontAwesomeIcon icon={faPhone} /> +91 8481848484</p>
          <p><FontAwesomeIcon icon={faPhone} /> +91 8420533005</p>
          <p><FontAwesomeIcon icon={faPhone} /> +033 4804 9142</p>
          <p><FontAwesomeIcon icon={faPhone} /> +91 99039 80011</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;