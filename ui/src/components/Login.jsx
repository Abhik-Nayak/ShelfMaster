import React, { useState } from 'react';
import axios from 'axios';
import './style.css'; // Import the same CSS file used for registration
import { useNavigate } from 'react-router-dom'; 

function Login({setLoggedin}) {
  const [formData, setFormData] = useState({ email: 'abhik@gmail.com', password: '12345' });
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8001/sign-in', formData);
      const accessToken = response.data.token;
      localStorage.setItem('accessToken', accessToken); // Store the token securely
      if (accessToken) {
        navigate('/profile'); // Navigate to the profile page
        setLoggedin(true)
      }
    } catch (error) {
      console.error(error); // Handle login error
    }
  };

  return (
    <div className="registration-form"> {/* Reuse the same CSS class */}
      <h2>Login</h2>
      <input
        type="text"
        placeholder="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
