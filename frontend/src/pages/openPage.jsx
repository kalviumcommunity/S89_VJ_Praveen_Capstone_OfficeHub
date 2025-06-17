import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/open.css';
import vid from '../../images/port.mp4';
import '../styles/navbar.css'; // Import styles for the navbar
import logo from '../../images/l.png';
import open from '../../images/open.png'; // Import the open image

const OpenPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // You can replace this with your actual login logic
    navigate('/login');
  };

  return (
    <div className="openpage-container">
      <video
        className="openpage-bg-video"
        src={vid}
        autoPlay
        loop
        muted
      />
      <div className="openpage-image">
         <img
            src={open}
            style={{ height: '250px', width: '200px', objectFit: 'contain' }}
          />
      </div>
      <div className="openpage-overlay">
        <div>
            <nav className="navbar">
      <div className="navbar-logo">
        
          <img
            src={logo}
            alt="OfficeHub Logo"
            style={{ height: '250px', width: '200px', objectFit: 'contain' }}
          />
        
      </div>
      <ul className="navbar-links">
        <li>
                  <Link to="/login">Resume Builder</Link>
                </li>
                <li>
                  <Link to="/login">OFFICE THINGS</Link>
                </li>
                <li>
                  <Link to="/login">Portfolio Creator</Link>
                </li>
                <li>
                  <Link to="/login">Profile</Link>
                </li>
                <li>
                  <Link to="/login">Login </Link>
                </li>
      </ul>
    </nav>
        </div>
        <div className="openpage-content">
          <h1>Welcome to OfficeHub</h1>
          <p>Your one-stop solution for professional tools and resources.</p>
          <button className="openpage-login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenPage;