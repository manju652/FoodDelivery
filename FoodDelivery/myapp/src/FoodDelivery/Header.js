import React from 'react';
import logo from './assets/Logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
          <button className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"   >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">

            <form className="d-flex my-2 my-lg-0 w-50">
              <input
                className="form-control me-sm-2 "
                type="text"
                placeholder="Search" />
            </form>
           
            <ul className="navbar-nav nav-pill ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/restaurants">Restaurant</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand" to="/admin">
            <button className='btn btn-danger'>Login</button>
          </NavLink>
            
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Header;