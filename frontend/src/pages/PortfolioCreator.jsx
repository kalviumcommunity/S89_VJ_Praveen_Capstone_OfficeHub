import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PortfolioCreator.css'; // Add a new CSS file for Portfolio Creator-specific styles
import Footer from '../components/Footer';

const PortfolioCreator = () => {
  return (
    <div className="portfolio-container">
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
      <header className="portfolio-header">
        <h1>Portfolio Creator</h1>
        <p>Build and showcase your professional portfolio with ease.</p>
      </header>
      <section className="portfolio-section">
        <h2>Create Your Portfolio</h2>
        <div className="portfolio-content">
          <p>Start by adding your projects, skills, and achievements to create a stunning portfolio.</p>
          <button className="create-portfolio-button">Get Started</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PortfolioCreator;