import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ViewRestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  const [id, setId] = useState("");
  const [banner, setBanner] = useState("");
  const [categories, setCategories] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/RestaurantMenu")
      .then((res) => setRestaurantMenu(res.data))
      .catch((err) => console.log(err))
  });

  const deleteMenu = (menuId) => {
    axios.delete(`http://localhost:4000/RestaurantMenu/${menuId}`)
      .then(() => alert("Menu Deleted"))
      .catch((err) => console.log(err))
  }

  const getOneMenu = (menuId) => {
    axios
      .get(`http://localhost:4000/RestaurantMenu/${menuId}`)
      .then((res) => {
        setId(res.data.id);
        setBanner(res.data.banner);
        setCategories(res.data.categories);
        setItem(res.data.item);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err))
  }

  const postMenu = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:4000/RestaurantMenu/${id}`, { id, banner, categories, item, price, description })
      .then(() => alert("Menu Updated"))
      .catch((err) => console.log(err))
  }

  return (
    <section className='container p-5'>
      <h1 className='text-warning-emphasis text-center pb-5'>Restaurant Menu</h1>
      <div className='row'>
        {restaurantMenu.map((menu, index) => {
          return (
            <div className='col-md-3  mb-3' key={index}>
              <div className='card h-100 rounded'>
                <NavLink to={`/MenuDetails/${menu.id}`} className='w-100 h-100 rounded' >
                  <img src={menu.banner} alt={menu.banner} className='w-100 h-100 rounded' />
                </NavLink>
                <div className='card-body'>
                  <h5 className='card-title'>{menu.item}</h5>
                </div>
                <div className='card-footer'>
                  <button className='btn btn-primary w-50' onClick={() => getOneMenu(menu.id)}
                    data-bs-target="#update" data-bs-toggle="modal">Edit</button>
                  <button className='btn btn-danger w-50' onClick={() => deleteMenu(menu.id)}>Delete</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className='modal fade' id='update' data-bs-backdrop='static' data-bs-keyboard='false'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div class="modal-header">
              <h5 class="modal-title text-danger">Edit Menu</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={postMenu} className='col-lg-12'>
                <input type='text' name='categories' placeholder='Categories' className='form-control mb-3'
                  value={categories} onChange={(e) => { setCategories(e.target.value) }} />

                <input type='text' name='banner' placeholder='Image Address' className='form-control mb-3'
                  value={banner} onChange={(e) => { setBanner(e.target.value) }} />

                <input type='text' name='item' placeholder='Item' className='form-control mb-3'
                  value={item} onChange={(e) => { setItem(e.target.value) }} />

                <input type='text' name='description' placeholder='Course Description' className='form-control mb-3'
                  value={description} onChange={(e) => { setDescription(e.target.value) }} />

                <input type='text' name='price' placeholder="price" className='form-control mb-3'
                  value={price} onChange={(e) => { setPrice(e.target.value) }} />

                <input className='btn btn-primary' type='submit' value='Add Menu' />
              </form>

            </div>
          </div>
        </div>
      </div>

    </section >
  );
};

export default ViewRestaurantMenu;