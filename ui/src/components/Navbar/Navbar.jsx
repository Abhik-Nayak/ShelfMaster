import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ loggedin }) => {
	const navigate = useNavigate()
	const [open, setOpen] = useState(false);
	const [isLoggedin, setIsloggedin] = useState(false)
	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};
	useEffect(() => {
		loggedin ? setIsloggedin(true) : setIsloggedin(false);
		if (loggedin === false) { navigate("/login") }
	}, [loggedin,navigate])

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo">
				Logo
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/register" className="nav-link" onClick={closeMenu}>
						Registration
					</Link>
				</li>
				{isLoggedin ? <li className="nav-item">
					<Link to="/logout" className="nav-link" onClick={closeMenu}>
						Logout
					</Link>
				</li> :
					<li className="nav-item">
						<Link to="/login" className="nav-link" onClick={closeMenu}>
							Login
						</Link>
					</li>
				}
				<li className="nav-item">
					<Link to="/profile" className="nav-link" onClick={closeMenu}>
						Profile
					</Link>
				</li>
				{isLoggedin ?
					<li className="nav-item">
						<Link to="/todo" className="nav-link" onClick={closeMenu}>
							Todo
						</Link>
					</li> : ""
				}
			</ul>
		</nav>
	);
};

export default Navbar;
