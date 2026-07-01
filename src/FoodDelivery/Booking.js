import axios from 'axios';
import React, { useState } from 'react';

const Booking = () => {
    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [tables, setTables] = useState("");
    const [message, setMessage] = useState("");

    const postEnquiry = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/BookingTable`, { username, mobile, email, tables, message })
            .then(() => alert("You Table Booked"))
            .catch((err) => console.log(err))

    };

    return (
        <div className='home-welcome bg-white text-center p-5' id="booking">
            <h5 className='text-danger'>Book Your Table</h5>
            <h1>Make A Reservation</h1>
            <p>You can book your table online easily in just a couple of minutes. We take reservations for lunch, just check the availability of your table.</p>
            <div className='testimonial-card p-3 m-3 h-100'>
                <div className='border border-danger p-2 border-opacity-75'>
                    <div className='border border-danger p-2 border-opacity-75'>
                        <form onSubmit={postEnquiry}>
                            <input type='text' name='Username' placeholder='Your Name' className='form-control mb-3'
                                value={username} onChange={(e) => { setUsername(e.target.value) }} />
                            <p id='nameError'></p>

                            <input type='text' name='Mobile' placeholder='Phone Number' className='form-control mb-3'
                                value={mobile} onChange={(e) => { setMobile(e.target.value) }} />
                            <p id='mobileError'></p>

                            <input type='text' name='Email' placeholder='Email' className='form-control mb-3'
                                value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <p id='emailError'></p>

                            <input type='number' name='Tables' placeholder='Number of tables' className='form-control mb-3'
                                value={tables} onChange={(e) => { setTables(e.target.value) }} />
                            <p id='emailError'></p>

                            <textarea rows={10} cols={5} type='text' name='Message' placeholder='Message' className='form-control mb-3'
                                value={message} onChange={(e) => { setMessage(e.target.value) }} ></textarea>

                            <input className='submit_button border-0 rounded p-2' type='submit' value='Find a Table' />

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Booking;