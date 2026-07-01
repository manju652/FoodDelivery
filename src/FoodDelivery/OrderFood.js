import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderFood = () => {
  const { id } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [order, setOrder] = useState([]); // Holds the user's order

  useEffect(() => {
    axios.get(`http://localhost:4000/RestaurantMenu/${id}`)
      .then((res) => { setRestaurantMenu(res.data) })
      .catch((err) => {
        console.log(err);
      });
  }, [id]); // Add id as a dependency

  // Function to add items to the order
  const addToOrder = (item) => {
    const existingItem = order.find((orderItem) => orderItem.id === item.id);
    if (existingItem) {
      setOrder(
        order.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  // Function to calculate the total price of the order
  const calculateTotal = () => {
    return order.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Function to handle order submission
  const handleOrderPlacement = () => {
    const orderDetails = {
      items: order,
      total: calculateTotal(),
      timestamp: new Date().toISOString(), // Optional: Add a timestamp for the order
    };

    axios.post('http://localhost:4000/Orders', orderDetails)
      .then(() => {
        alert('Order placed successfully!');
        setOrder([]); // Clear the order
      })
      .catch((err) => {
        console.error('Error placing order:', err);
        alert('Failed to place the order. Please try again.');
      });
  };

  return (
    <div>
      <h1>Food Ordering</h1>
      <h2>Menu</h2>
      <div>
        <div key={restaurantMenu.id}>
          <h3>{restaurantMenu.item}</h3>
          <p>Category: {restaurantMenu.category}</p>
          <p>Price: Rs. {restaurantMenu.price}</p>
          <button
            className="submit_button border border-0 rounded p-2"
            onClick={() => addToOrder(restaurantMenu)}
          >
            Add to Order
          </button>
        </div>
      </div>

      <h2>Order Summary</h2>
      {order.length === 0 ? (
        <p>Your order is empty.</p>
      ) : (
        <div>
          <ul>
            {order.map((orderItem) => (
              <li key={orderItem.id}>
                {orderItem.item} x {orderItem.quantity} = Rs.{" "}
                {orderItem.price * orderItem.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: Rs. {calculateTotal()}</h3>
          <button
            className="submit_button border border-0 rounded p-2"
            onClick={handleOrderPlacement}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderFood;












