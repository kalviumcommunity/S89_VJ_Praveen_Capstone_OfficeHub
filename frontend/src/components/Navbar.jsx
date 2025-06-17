import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import styles for the navbar
import logo from '../../images/l.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">
          <img
            src={logo}
            alt="OfficeHub Logo"
            style={{ height: '110px', width: '200px', objectFit: 'contain' }}
          />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/resume-builder">Resume Builder</Link>
        </li>
        <li>
          <Link to="/ecommerce">OFFICE THINGS</Link>
        </li>
        <li>
          <Link to="/portfolio-creator">Portfolio Creator</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Login </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;