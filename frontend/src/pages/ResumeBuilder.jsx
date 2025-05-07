import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Reuse the navbar styles from Home.css

const ResumeBuilder = () => {
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
        <h1>Resume Builder</h1>
        <p>Build your professional resume with ease.</p>
      </header>
    </div>
  );
};

export default ResumeBuilder;