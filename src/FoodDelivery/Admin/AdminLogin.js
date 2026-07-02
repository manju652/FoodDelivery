import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const loginCheck = (e) => {
    e.preventDefault()
   if (username === "Swapna" && password === "kakarapalli") {
  navigate("/dashboard");
}
    else {
      alert("Invalid Credentials");
    }
  }
  return (
    <div className='container p-5'>
      <div className='shadow col-md-4 p-3 m-auto rounded'>
        <form onSubmit={loginCheck}>
          <input type='text' name='username' placeholder='UserName' className='form-control mb-3'
            value={username} onChange={(e) => { setUsername(e.target.value) }} />
          <p className='login_hint px-3'>Hint: Swapna</p>

          <input type='text' name='password' placeholder='Password' className='form-control mb-3'
            value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <p className='login_hint px-3'>Hint: kakarapalli</p>

          <button className='btn btn-warning form-control'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;