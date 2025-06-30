import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Gallery = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]); // Stores full data

  useEffect(() => {
    axios
      .get("http://localhost:4000/RestaurantMenu")
      .then((res) => setRestaurantMenu(res.data))
      .catch((err) => console.log(err))
  });


  return (
    <section class="container-fluid p-5">
      <h1 class="text-center mb-4">Gallery</h1>
      <div class="row">
        {restaurantMenu.map((menu, index) => {
          return (
            <div className='col-md-4 mb-4' key={index}>              
              <NavLink to={`/GalleryDetails/${menu.id}`}>
              <img src={menu.banner} alt={menu.banner} className='w-100 h-100 rounded' />
              </NavLink>
            </div>
          )
        })}
      </div>
    </section >
  )
}

export default Gallery