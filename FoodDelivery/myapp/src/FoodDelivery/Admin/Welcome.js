import React from 'react'
import useCallAPI from './CallAPI';

const Welcome = () => {
  const menu = useCallAPI("http://localhost:4000/RestaurantMenu");
  const orders = useCallAPI("http://localhost:4000/Orders");
  const bookingtable = useCallAPI("http://localhost:4000/BookingTable");
  return (
    <div>
      <h1>Welcome to Admin Dashboard</h1>
      <br/>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card'>
            <div className='Timings p-4 text-center'>
              <div className='border border-white p-2 border-opacity-75'>
                <div className='border border-white p-2 border-opacity-75'>
                  <h1 className='card-title'>{menu.length}</h1>
                  <h5 className='card-title'>Menu</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'>
            <div className='Timings p-4 text-center'>
              <div className='border border-white p-2 border-opacity-75'>
                <div className='border border-white p-2 border-opacity-75'>
                  <h1 className='card-title'>{orders.length}</h1>
                  <h5 className='card-title'>Orders</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'>
            <div className='Timings p-4 text-center'>
              <div className='border border-white p-2 border-opacity-75'>
                <div className='border border-white p-2 border-opacity-75'>
                  <h1 className='card-title'>{bookingtable.length}</h1>
                  <h5 className='card-title'>Table</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Welcome;