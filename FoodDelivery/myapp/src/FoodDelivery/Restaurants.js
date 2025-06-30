import React from 'react';
import CategorieItems from './CategorieItems';

const Restaurants = () => {
  
  return (
    <section>
      <div className="card text-bg-dark">
        <img src='https://indiarestaurant.co.in/assets/images/backgrounds/MENU.jpg' className="card-img" alt="..." />
        <div className="card-img-overlay restaurant-center ">
          <div className='text-center'>
            <h1 className="card-text">Our Menu</h1>
          </div>
        </div>
      </div>

      <div className='home-welcome text-center py-5'>
        <h5>Taste The Best</h5>
        <h1>Discover Our Menu</h1>
        <p>Even if you're not a great chef, there's nothing to stop you understanding the difference between what tastes good and what doesn't.</p>
      </div>
     
     <CategorieItems />

    </section >
  );
};

export default Restaurants;