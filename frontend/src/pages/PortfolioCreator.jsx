import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import '../styles/PortfolioCreator.css';

const PortfolioCreator = () => {
  return (
    <div className="portfolio-container">
      <Navbar /> {/* Navbar imported and fixed */}
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
    </div>
  );
};

export default PortfolioCreator;