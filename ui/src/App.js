// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the changes in imports
import Registration from './components/Registration';
import Login from './components/Login';
import Logout from './components/Logout.jsx';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar/Navbar.jsx';
import Todo from './components/Todo/Todo.jsx';
import "./App.css"
import axios from 'axios';
import Home from './components/Home.jsx';

function App() {
  const [loggedin, setLoggedin] = useState();
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    accessToken ? setLoggedin(true) : setLoggedin(false)
    if (accessToken) {
      axios.get('http://localhost:8001/get-user', {
        headers: { authorization: `Bearer ${accessToken}` },
      })
        .then((response) => {
          if (response.data.success === true) {
            let data = response.data.userData.tokens;
            let cookies = data.map((item) => item.token)
            let check = cookies.includes(accessToken)
            if(check === false)
            {
              setLoggedin(false)
              localStorage.removeItem('accessToken');
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

  }, [])
  return (
    <Router>
      <Navbar loggedin={loggedin} />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login setLoggedin={setLoggedin} />} />
        <Route path="/logout" element={<Logout setLoggedin={setLoggedin} />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/profile" element={<UserProfile />} />

      </Routes>
    </Router>
  );
}

export default App;
