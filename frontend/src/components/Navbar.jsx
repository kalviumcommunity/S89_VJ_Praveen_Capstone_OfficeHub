import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">OfficeHub</Link>
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
          <Link to="/login">Login         _.... </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;