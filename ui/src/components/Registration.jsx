// Registration.js
import React, { useState } from 'react';
import axios from 'axios';
import "./style.css"

function Registration() {
    const [formData, setFormData] = useState({ username: '', email: ' ' ,password: '' });

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:8001/create-user', formData);
            const res = response.data;
            switch (res.success) {
              case false:
                alert(res.message);
                break;
              case true:
                alert("User Registered successfully");
                break;
              default:
                alert("Internal server error");
            }            
        } catch (error) {
            console.error(error); // Handle registration error
        }
    };

    return (
        <div className="registration-form">
          <h2>Registration</h2>
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <button onClick={handleRegister}>Register</button>
        </div>
      );
    }
    
    export default Registration;
