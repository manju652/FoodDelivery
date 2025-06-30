import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import OrderFood from './OrderFood';

const GalleryDetails = () => {
    const { id } = useParams();
    const [restaurantMenu, setRestaurantMenu] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/RestaurantMenu/${id}`)
            .then((res) => { setRestaurantMenu(res.data) })
            .catch((err) => {
                console.log(err);
            })
    })
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col-md-8'>
                    <img src={restaurantMenu.banner} alt='RefImg' className='w-50 rounded' />
                    <h4>{restaurantMenu.item}</h4>
                    <p>{restaurantMenu.description}</p>
                    <button type="button" class="btn btn-danger btn-sm">{restaurantMenu.price}</button>
                </div>
                <div className='col-md-4 border-start ps-5'>
                    <OrderFood />
                </div>
            </div>
            <NavLink to={`/gallery`}><button className='btn btn-outline-danger my-3 px-3'> <FontAwesomeIcon icon={faArrowLeft} />Back</button></NavLink>
        </div>
    )
}

export default GalleryDetails;