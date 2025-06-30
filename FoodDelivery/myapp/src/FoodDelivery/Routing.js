import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Restaurants from './Restaurants';
import Contact from './Contact';
import About from './About';
import Error404 from './Error404';
import AdminLogin from './Admin/AdminLogin';
import Dashboard from './Admin/Dashboard';
import MenuDetails from './MenuDetails';
import Gallery from './Gallery';
import GalleryDetails from './GalleryDetails';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/restaurants' element={<Restaurants />} />
      <Route path="//menuDetails/:id" element={<MenuDetails />} />
      <Route path="//GalleryDetails/:id" element={<GalleryDetails />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Error404 />} />
      <Route path='/admin' element={<AdminLogin />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
};

export default Routing;