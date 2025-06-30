import React from 'react';
import banner1 from './assets/carousel5.jpg';
import banner2 from './assets/carousel6.jpg';
import banner3 from './assets/carousel7.jpg';
import banner4 from './assets/carousel8.jpg';
import banner5 from './assets/carousel9.jpg';
import home1 from './assets/home1.jpg';
import speciality1 from './assets/country-speciality1.jpg';
import speciality2 from './assets/country-speciality2.jpg';
import speciality3 from './assets/country-speciality3.jpg';
import Testimonials from './Testimonials';
import Booking from './Booking';




const Home = () => {
  return (
    <section>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card text-bg-dark">
              <img src={banner1} className="card-img" alt="..." />
              <div className="card-img-overlay card-text-center">
                <div className='text-center'>
                  <p className="card-title">When Flavours meet Passion, Magic happens.</p>
                  <h1 className="card-text">Come join us for a magical experience.</h1>                  
                  <a href="#booking"><button className='cta-button'>BOOK A TABLE</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card text-bg-dark">
              <img src={banner2} className="card-img" alt="..." />
              <div className="card-img-overlay card-text-center">
                <div className='text-center'>
                  <h1 className="card-text">Our dishes will soothe your eyes, nourish your palate and gratify your soul</h1>
                  <a href="#booking"><button className='cta-button'>BOOK A TABLE</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card text-bg-dark">
              <img src={banner3} className="card-img" alt="..." />
              <div className="card-img-overlay card-text-center">
                <div className='text-center'>
                  <h1 className="card-text">A ticket to a heavenly food experience.</h1>
                  <a href="#booking"><button className='cta-button'>BOOK A TABLE</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card text-bg-dark">
              <img src={banner4} className="card-img" alt="..." />
              <div className="card-img-overlay card-text-center">
                <div className='text-center'>
                  <h1 className="card-text">Fascinating Food + Admirable Ambience + Significant Staff = India Restaurant</h1>
                  <a href="#booking"><button className='cta-button'>BOOK A TABLE</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card text-bg-dark">
              <img src={banner5} className="card-img" alt="..." />
              <div className="card-img-overlay card-text-center">
                <div className='text-center'>
                  <h1 className="card-text">Add a special touch to your regular days with our delicious dishes.</h1>
                  <a href="#booking"><button className='cta-button'>BOOK A TABLE</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='container-fluid py-5'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='text-center p-5 text-middle bg-light'>
              <div className='home-welcome'>
                <h5 className='text-danger'>Welcome To</h5>
                <h1>India Restaurant</h1>
                <p>India Restaurant has been serving delightful experiences through the art of cooking for
                  four decades. A cozy, relaxing space combined with flavourful dishes makes it a first choice for every foodie in town.
                  It provides a wide range of items to choose from and lets everyone indulge in an experience of pleasing their taste
                  buds.</p>
                <p>We provides a wide range of cuisines and dishes to choose from so that every foodie in town has their best experience here.</p>
                <p>We are known to be the best Mughlai eatery in Kolkata. We have always won the hearts of our customers with appetizing dishes and friendly behaviour.
                  It is the best choice for everyone who wants to enjoy the best quality food at reasonable prices.</p>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <img src={home1} className="card-img" alt="..." />
          </div>
        </div>
      </div>

      <div className='content-feelgood'>
        <div>
          <p>We Create Delicious Memories</p>
          <h1>Eat Good Feel Good</h1>
        </div>
      </div>

      <div class="speciality">
        <div class="container">
          <div className='home-welcome'>
            <h5 className='text-danger'>India Restaurant</h5>
            <h1>Our Speciality</h1>
            <p>We provide a wide range of cuisines and dishes to choose from so that every foodie in town has their best experience with us.</p>
          </div>
          <div className="row text-center">
            <div className="col-12 col-md-4">
              <div class="image-container">
                <img src={speciality1} alt="Mughlai" class="zoom-image" />
              </div>
              <h5>Mughlai</h5>
            </div>

            <div class="col-12 col-md-4">
              <div class="image-container">
                <img src={speciality2} alt="Indian" class="zoom-image" />
              </div>
              <h5>Indian</h5>
            </div>

            <div class="col-12 col-md-4">
              <div class="image-container">
                <img src={speciality3} alt="Chinese" class="zoom-image" />
              </div>
              <h5>Chinese</h5>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      <Booking />

      <div className='home-welcome bg-white text-center p-5'>
        <h1>Excellence</h1>
        <p>We are blessed enough to be honoured with great awards from food critics and organizations all over the world.</p>
        <h5 className='text-danger'>Order Now</h5>

        <img className='px-3' src='https://indiarestaurant.co.in/assets/images/clients/zomato-logo.png' alt='zomato'/>
        <img className='px-3' src='https://indiarestaurant.co.in/assets/images/clients/swiggy.png' alt='swiggy'/>
        <img className='px-3' src='https://indiarestaurant.co.in/assets/images/clients/Dineout-Logo.png' alt='dineout'/>
      </div>
    </section>
  );
};

export default Home;