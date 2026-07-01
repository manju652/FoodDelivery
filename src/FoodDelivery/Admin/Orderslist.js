import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the fake API
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/Orders"); // Replace with actual API
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((entry) => entry.id !== id));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className='text-center'>Orders</h1>
      <table className='table table-bordered table-hover'>
        <thead className='table-danger'>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.items[0].categories}</td>
              <td>{entry.items[0].item}</td>
              <td>{entry.items[0].price}</td>
              <td>{entry.items[0].quantity}</td>
              <td>{entry.total}</td>
              <td>
                <button className='btn btn-danger' onClick={() => handleDelete(entry.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;








