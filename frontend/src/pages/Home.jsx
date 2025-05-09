import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Home.css';
import logo from '../../../images/logo.png';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar /> {/* Navbar imported and fixed */}
      <header className="home-header">
        <img
          src={logo}
          alt="OfficeHub Logo"
          className="home-logo"
        />
        <h1>Welcome to OfficeHub</h1>
        <p>Your one-stop solution for professional tools and resources.</p>
      </header>

      <div className="home-sections">
        {/* Resume Builder Card */}
        <div className="home-card resume-card">
          <h2>Resume Builder</h2>
          <p>Create and download professional resumes with ease.</p>
          <a href="/resume-builder" className="home-link">
            Get Started
          </a>
        </div>

        {/* Portfolio Creator Card */}
        <div className="home-card portfolio-card">
          <h2>Portfolio Creator</h2>
          <p>Build and showcase your professional portfolio.</p>
          <a href="/portfolio-creator" className="home-link">
            Create Portfolio
          </a>
        </div>

        {/* E-commerce Card */}
        <div className="home-card ecommerce-card">
          <h2>E-commerce</h2>
          <p>Shop for office essentials and manage your cart.</p>
          <a href="/ecommerce" className="home-link">
            Explore Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;