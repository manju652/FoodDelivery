import React, { useContext, useMemo, useState } from 'react';
import { LoginStatus } from '../../App';
import AdminLogin from './AdminLogin';
import Welcome from './Welcome';
import AddRestaurantMenu from './AddRestaurantMenu';
import ViewRestaurantMenu from './ViewRestaurantMenu';
import Orderslist from './Orderslist';
import Bookinguser from './Bookinguser';

const Dashboard = () => {
  const [view, setView] = useState("");
 const [login] = useState(false);;

  const DashboardView = useMemo(() => {
    console.log("function Executed");
    if (view === "") {
      return <Welcome />;
    } else if (view === "addRestaurantMenu") {
      return <AddRestaurantMenu />;
    } else if (view === "viewRestaurantMenu") {
      return <ViewRestaurantMenu />;
    } else if (view === "ordersList") {
      return <Orderslist />;
    } else if (view === "booking") {
      return <Bookinguser />;
    } 
  }, [view]
  )

  if (login) {
    return (
      <div className="container-fluid">
        <div className="row">
          <aside className="col-md-3">
            <h2 className='text-danger py-3' onClick={()=>{setView("")}}>Admin Dashboard</h2>
            <button className='text-start' onClick={() => { setView("addRestaurantMenu") }}>Add RestaurantMenu</button>
            <button className='text-start' onClick={() => { setView("viewRestaurantMenu") }}>View RestaurantMenu</button>
            <button className='text-start' onClick={() => { setView("ordersList") }}>Orders list</button>
            <button className='text-start' onClick={() => { setView("booking") }}>Booking</button>
          </aside>
          <div className="col-lg-9 d-flex justify-content-center align-items-center">
            {DashboardView}
          </div>
        </div>
      </div>
    );
  }
  else {
    return <AdminLogin />
  }

};

export default Dashboard;