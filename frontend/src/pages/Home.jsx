import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 

const Home = () => {
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
        <h1>Welcome to OfficeHub</h1>
        <p>Your one-stop solution for professional tools and resources.</p>
      </header>

      <div className="home-sections">
        <div className="home-card">
          <h2>Resume Builder</h2>
          <p>Create and download professional resumes with ease.</p>
          <Link to="/resume-builder" className="home-link">
            Get Started
          </Link>
        </div>

        <div className="home-card">
          <h2>E-commerce</h2>
          <p>Shop for office essentials and manage your cart.</p>
          <Link to="/ecommerce" className="home-link">
            Explore Products
          </Link>
        </div>

        <div className="home-card">
          <h2>Portfolio Creator</h2>
          <p>Build and showcase your professional portfolio.</p>
          <Link to="/portfolio-creator" className="home-link">
            Create Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;