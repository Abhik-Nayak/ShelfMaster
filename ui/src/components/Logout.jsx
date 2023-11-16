import React from 'react';
import axios from 'axios';
import "./style.css"
import { useNavigate } from 'react-router-dom';
const Logout = ({ loggedin, setLoggedin }) => {
    const navigate = useNavigate();

    const deleteSingledevice = async () => {
        const accessToken = localStorage.getItem('accessToken');
        await axios.post('http://localhost:8001/log-out', "data", {
            headers: { authorization: `Bearer ${accessToken}` },
        }).then((response) => {
            if (response.data.success === false) {
                alert(response.data.message)
            }
            if (response.data.success === true) {
                alert(response.data.message)
                localStorage.removeItem('accessToken');
                setLoggedin(false);
                navigate('/register');
            }

        }).catch((error) => {
            console.error(error);
        });
    }
    const deleteAlldevice = async () => {
        const accessToken = localStorage.getItem('accessToken');
        await axios.post('http://localhost:8001/log-out-all', "data", {
            headers: { authorization: `Bearer ${accessToken}` },
        }).then((response) => {
            if (response.data.success === false) {
                alert(response.data.message)
            }
            if (response.data.success === true) {
                alert(response.data.message)
                localStorage.removeItem('accessToken');
                setLoggedin(false);
                navigate('/');
            }

        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div className="registration-form"> {/* Reuse the same CSS class */}
            <h2>Logout</h2>

            <button onClick={deleteSingledevice} style={{ margin: "10px 0 10px 0 ", backgroundColor: "#ff4f00" }}>Logout</button>
            <button onClick={deleteAlldevice} style={{ margin: "10px 0 10px 0 ", backgroundColor: "#ff0000" }}>Logout from All Devices</button>
        </div>
    )
}

export default Logout