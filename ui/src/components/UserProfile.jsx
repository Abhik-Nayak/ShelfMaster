import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function UserProfile() {
  const [user, setUser] = useState({});
  const [updatedData, setUpdatedData] = useState({ username: '', email: '' });

  useEffect(() => {
    getUserDetails()
  },[]);

  const getUserDetails = () =>{
    const accessToken = localStorage.getItem('accessToken');
    axios.get('http://localhost:8001/get-user', {
      headers: { authorization: `Bearer ${accessToken}` },
    })
      .then((response) => {
        if(response.data.success === true)
        {
          setUser(response.data.userData);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleUpdateProfile = () => {
    const accessToken = localStorage.getItem('accessToken');
    axios.post('http://localhost:8001/upload-profile', updatedData, {
      headers: { authorization: `Bearer ${accessToken}` },
    })
      .then((response) => {
        // Handle successful profile update
        if(response.data.success === true) getUserDetails()
        if(response.data.success === false) alert(response.data.message)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="registration-form"> 
      <h2>User Profile</h2>
      <div style={{paddingTop: "10px"}}>
        <p><b>username:</b> {user.username}</p>
        <p><b>Email</b>: {user.email}</p>
      </div>
      <input
        type="text"
        placeholder="username"
        value={updatedData.username}
        onChange={(e) => setUpdatedData({ ...updatedData, username: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        value={updatedData.email}
        onChange={(e) => setUpdatedData({ ...updatedData, email: e.target.value })}
      />
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
}

export default UserProfile;
