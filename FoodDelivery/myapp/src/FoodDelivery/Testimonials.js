import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

import customer1 from './assets/customer1.png';
import customer2 from './assets/customer2.png';
import customer3 from './assets/customer3.png';
import customer4 from './assets/customer4.png';


const Testimonials = () => {
    const options = {
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    };
    return (
        <div className='testimonial py-5'>
            <div className='home-welcome'>
                <p className='text-light'>People Talk</p>
                <h1 className='text-light'>Our Testimonial</h1>
            </div>
            <OwlCarousel className='owl-theme p-5' {...options}>
                <div className='testimonial-card p-3 m-3 h-100'>
                    <div className='border border-danger p-2 border-opacity-75'>
                        <div className='border border-danger p-2 border-opacity-75'>
                            <div className="rating">
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfStroke} />
                                </span>
                            </div>
                            <p className="text-secondary">"Ambiance was very good.. chicken hariyali kabab, chicken special biriyani..
                                taste, quantity, quality was good.. enough for two"</p>
                            <div className="d-flex justify-content-center">
                                <img src={customer1} alt="Customer 1" className="w-25 mx-3" />
                            </div>
                            <h5>Sudeshna Mukherjee</h5>
                        </div>
                    </div>
                </div>

                <div className='testimonial-card p-3 m-3 h-100'>
                    <div className='border border-danger p-2 border-opacity-75'>
                        <div className='border border-danger p-2 border-opacity-75'>
                            <div className="rating">
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfStroke} />
                                </span>
                            </div>
                            <p className="text-secondary">"Quality food with best ambience and a good taste of Mughals food. Note for vegetarians. Best place for family dinner and lunch."</p>
                            <div className="d-flex justify-content-center">
                                <img src={customer3} alt="Customer 1" className="w-25 mx-3" />
                            </div>
                            <h5>Arindam Goswami</h5>
                        </div>
                    </div>
                </div>

                <div className='testimonial-card p-3 m-3 h-100'>
                    <div className='border border-danger p-2 border-opacity-75'>
                        <div className='border border-danger p-2 border-opacity-75'>
                            <div className="rating">
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfStroke} />
                                </span>
                            </div>
                            <p className="text-secondary">"We've been there last year during pija after lockdown. Their biriyani is like mouthwatering. Perfect in quality and quantity."</p>
                            <div className="d-flex justify-content-center">
                                <img src={customer2} alt="Customer 1" className="w-25 mx-3" />
                            </div>
                            <h5>Melanie Nakagawa</h5>
                        </div>
                    </div>
                </div>

                <div className='testimonial-card p-3 m-3 h-100'>
                    <div className='border border-danger p-2 border-opacity-75'>
                        <div className='border border-danger p-2 border-opacity-75'>
                            <div className="rating">
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfStroke} />
                                </span>
                            </div>
                            <p className="text-secondary">"No wonder why this place's Biryani is considered one of the best in the town. It is counted under the best Biriyani Maker in Kolkata"</p>
                            <div className="d-flex justify-content-center">
                                <img src={customer4} alt="Customer 1" className="w-25 mx-3" />
                            </div>
                            <h5>Jaya Kishori</h5>
                        </div>
                    </div>
                </div>

            </OwlCarousel>
        </div>
    );
};

export default Testimonials;










