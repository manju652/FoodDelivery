import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Bookinguser = () => {
  const [bookinguser, setBookinguser] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/BookingTable")
      .then((res) => setBookinguser(res.data))
      .catch((err) => console.log(err))
  });

  const deleteUser = (bookingId) => {
    axios.delete(`http://localhost:4000/BookingTable/${bookingId}`)
      .then(() => alert("User Deleted"))
      .catch((err) => console.log(err))
  }


  return (
    <section className='container p-5'>
      <table className='table table-bordered table-hover'>
        <thead className='table-danger'>
          <tr>
            <th>Username</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Number of Tables</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookinguser.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.mobile}</td>
                <td>{user.email}</td>
                <td>{user.tables}</td>
                <td>{user.message}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      


    </section>
  )
}

export default Bookinguser