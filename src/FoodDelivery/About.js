import React from 'react';
import logo from './assets/Logo.png';
import 'animate.css';

const About = () => {
  return (
    <section>
      <div className="card text-bg-dark">
        <img src='https://indiarestaurant.co.in/assets/images/backgrounds/ABOUT-1.jpg' className="card-img" alt="About Us" />
        <div className="card-img-overlay restaurant-center ">
          <div className='text-center'>
            <h1 className="card-text">Our Story</h1>
          </div>
        </div>
      </div>

      <div className='speciality bg-white'>
        <div className='home-welcome'>
          <h5 className='text-danger'>Welcome To The India Restaurant</h5>
          <h1>Delicious Food, Friendly Staff, <br />Cozy Atmosphere & Positive Emotions!</h1>
        </div>
      </div>

      <div className='container-fluid py-5'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='text-center p-5 text-middle bg-light'>
              <div className='home-welcome'>
                <img src={logo} className='text-center w-25'alt="AboutUs" />
                <p>Haji Syed Mohammad Kalim built a small eatery more than 40 years ago to provide lip-smacking Mughlai dishes at pocket-friendly prices.
                  The place garnered immense popularity in no time because they delivered palatable delicacies consistently at a very reasonable range.
                  Today the proprietors of India Restaurant, Syed Anwar Azeem, Syed Misbah Kalim, and Syed Shahmeer Kalim, took forward the legacy of their
                  father to a different dimension. They have collected their father’s dream and changed it into a beautiful reality. The India restaurant
                  currently provides a delightful and vibrant ambiance having a seating arrangement for 300 people. The restaurant now has added heterogeneity
                  in its menu with Indian and Chinese cuisine. This place still holds its roots and swears by serving the best biryani in town. It is also
                  exploring and experimenting with other flavours and cuisines to give new aspects to the place.</p>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <img src='https://indiarestaurant.co.in/assets/images/gallery/1.jpg' className="card-img" alt="About Us" />
          </div>
        </div>
      </div>
      <div className='container-fluid py-5'>
        <div className='row'>
          <div className='col-12 col-md-4 about Mission'>
            <div className='home-welcome text-center animate__animated animate__fadeInLeft'>
              <h1>Our Mission</h1>
              <p>To help our customers enjoy simple edible pleasures and reach their hearts through their stomachs.</p>
            </div>
          </div>
          <div className='col-12 col-md-4 Vision'>
            <img src='https://indiarestaurant.co.in/assets/images/backgrounds/vision-banner.jpg' className="card-img" alt="Vision" />
          </div>
          <div className='col-12 col-md-4 about Mission'>
            <div className='home-welcome text-center'>
              <h1>Our Vision</h1>
              <p>To create an ultimate destination for every food lover in town and lead them to an extraordinary food journey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;