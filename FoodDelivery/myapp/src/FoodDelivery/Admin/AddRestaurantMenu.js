import axios from 'axios';
import React, { useState } from 'react';

const AddRestaurantMenu = () => {
  const [banner, setBanner] = useState("");
  const [categories, setCategories] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const postMenu = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:4000/RestaurantMenu`, { banner, categories, item, price, description })
      .then(() => alert("Menu added"))
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className='container d-flex justify-content-center align-items-center'>

      <form onSubmit={postMenu} className='col-lg-5 shadow col-md-4 p-3 m-auto rounded'>

        <input type='text' name='categories' placeholder='Categories' className='form-control mb-3'
          value={categories} onChange={(e) => { setCategories(e.target.value) }} />

        <input type='text' name='item' placeholder='Item Name' className='form-control mb-3'
          value={item} onChange={(e) => { setItem(e.target.value) }} />

        <input type='text' name='banner' placeholder='Item Image Address' className='form-control mb-3'
          value={banner} onChange={(e) => { setBanner(e.target.value) }} />

        <input type='text' name='price' placeholder='Price' className='form-control mb-3'
          value={price} onChange={(e) => { setPrice(e.target.value) }} />

        <input type='text' name='description' placeholder='Description' className='form-control mb-3'
          value={description} onChange={(e) => { setDescription(e.target.value) }} />

        <div className='text-end'>
          <input className='submit_button border-0 rounded p-2' type='submit' value='Add Menu' />
        </div>
      </form>
    </div>
  );
};

export default AddRestaurantMenu;