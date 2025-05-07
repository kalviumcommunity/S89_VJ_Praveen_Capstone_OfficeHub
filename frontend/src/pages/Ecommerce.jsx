import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Reuse the navbar styles from Home.css

const Ecommerce = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">OfficeHub</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/resume-builder">Resume Builder</Link>
          </li>
          <li>
            <Link to="/ecommerce">E-commerce</Link>
          </li>
          <li>
            <Link to="/portfolio-creator">Portfolio Creator</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <header className="home-header">
        <h1>E-commerce</h1>
        <p>Shop for office essentials and manage your cart.</p>
      </header>
    </div>
  );
};

export default Ecommerce;