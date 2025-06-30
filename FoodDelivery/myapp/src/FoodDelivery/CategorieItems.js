import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Tasty from './assets/Tasty.png';
import { NavLink } from 'react-router-dom';

const CategorieItems = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]); // Stores full data
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/RestaurantMenu")
      .then((res) => setRestaurantMenu(res.data))
      .catch((err) => console.log(err))
  });


  // Filter the data based on the selected category
  const handleFilter = (category) => {
    const filteredItems = restaurantMenu.filter((item) => {
      if (category.toLowerCase() === "tiffins") {
        return item.categories.toLowerCase() === "tiffins" || item.categories.toLowerCase() === "tiffin";
      }
      return item.categories.toLowerCase() === category.toLowerCase();
    });

    setFilteredData(filteredItems);
    setSelectedCategory(category);
  };


  return (
    <section className='container'>
      <div className='row text-center'>
        <div className='col-2 mb-3'>
          <div className="card border border-0">
            <img src={Tasty} className="card-img" alt="..." />
            <div className="card-img-overlay category-items">
              <div className='text-center'>
                <h6 onClick={() => handleFilter("Tiffins")}>Tiffins</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='col-2 mb-3'>
          <div className="card border border-0">
            <img src={Tasty} className="card-img" alt="..." />
            <div className="card-img-overlay category-items">
              <div className='text-center'>
                <h6 onClick={() => handleFilter("Curries")}>Curries</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='col-2 mb-3'>
          <div className="card border border-0">
            <img src={Tasty} className="card-img" alt="..." />
            <div className="card-img-overlay category-items">
              <div className='text-center'>
                <h6 onClick={() => handleFilter("Biryanis")}>Biryanis</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='col-2 mb-3'>
          <div className="card border border-0">
            <img src={Tasty} className="card-img" alt="..." />
            <div className="card-img-overlay category-items">
              <div className='text-center'>
                <h6 onClick={() => handleFilter("Desserts")}>Desserts</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='col-2 mb-3'>
          <div className="card border border-0">
            <img src={Tasty} className="card-img" alt="..." />
            <div className="card-img-overlay category-items">
              <div className='text-center'>
                <h6 onClick={() => handleFilter("Soups")}>Soups</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='col-2 mb-3'>
          <div className="card border border-0">
            <img src={Tasty} className="card-img" alt="..." />
            <div className="card-img-overlay category-items">
              <div className='text-center'>
                <h6 onClick={() => handleFilter("Snacks")}>Snacks</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='col-2 mb-3'>
          <div className="card border border-0">
            <img src={Tasty} className="card-img" alt="..." />
            <div className="card-img-overlay category-items">
              <div className='text-center'>
                <h6 onClick={() => handleFilter("Drinks")}>Drinks</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='col-2 mb-3'>
          <div className="card border border-0">
            <img src={Tasty} className="card-img" alt="..." />
            <div className="card-img-overlay category-items">
              <div className='text-center'>
                <h6 onClick={() => handleFilter("Meals")}>Meals</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='col-2 mb-3'>
          <div className="card border border-0">
            <img src={Tasty} className="card-img" alt="..." />
            <div className="card-img-overlay category-items">
              <div className='text-center'>
                <h6 onClick={() => handleFilter("Starters")}>Starters</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='col-2 mb-3'>
          <div className="card border border-0">
            <img src={Tasty} className="card-img" alt="..." />
            <div className="card-img-overlay category-items">
              <div className='text-center'>
                <h6 onClick={() => handleFilter("Salads")}>Salads</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='col-2 mb-3'>
          <div className="card border border-0">
            <img src={Tasty} className="card-img" alt="..." />
            <div className="card-img-overlay category-items">
              <div className='text-center'>
                <h6 onClick={() => handleFilter("Beverages")}>Beverages</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='col-2 mb-3'>
          <div className="card border border-0">
            <img src={Tasty} className="card-img" alt="..." />
            <div className="card-img-overlay category-items">
              <div className='text-center'>
                <h6 onClick={() => handleFilter("Specials")}>Specials</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='col-2 mb-3'>
          <div className="card border border-0">
            <img src={Tasty} className="card-img" alt="..." />
            <div className="card-img-overlay category-items">
              <div className='text-center'>
                <h6 onClick={() => handleFilter("Fast Foods")}>Fast Foods</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='col-2 mb-3'>
          <div className="card border border-0">
            <img src={Tasty} className="card-img" alt="..." />
            <div className="card-img-overlay category-items">
              <div className='text-center'>
                <h6 onClick={() => handleFilter("Regional Specials")}>Regional Specials</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='col-2 mb-3'>
          <div className="card border border-0">
            <img src={Tasty} className="card-img" alt="..." />
            <div className="card-img-overlay category-items">
              <div className='text-center'>
                <h6 onClick={() => handleFilter("Street Foods")}>Street Foods</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row restaurant-menu-bg p-5 my-3'>
        <div className='col-12 text-center'>
          <h2 className='text-light'>{selectedCategory ? `${selectedCategory} Menu` : "Menu"}</h2>
        </div>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className='row' key={item.id}>
              <div className='col-7'>
                <NavLink to={`/MenuDetails/${item.id}`} className='text-decoration-none text-white'>
                  <h3 className='text-light mb-5'>{item.item}</h3>
                </NavLink>
              </div>
              <div className='col-3'>

              </div>
              <div className='col-2'>
                <h3 className='text-light'>Rs.{item.price}</h3>
              </div>
              {/* <img src={item.banner} alt={item.item} /> */}
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>



    </section>
  )
}

export default CategorieItems;