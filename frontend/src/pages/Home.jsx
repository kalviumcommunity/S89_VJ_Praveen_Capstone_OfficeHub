import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <header className="home-header">
        <h1>Welcome to OfficeHub</h1>
        <p>Your one-stop solution for professional tools and resources.</p>
      </header>

      <div className="home-sections">
        <div className="home-card">
          <h2>Resume Builder</h2>
          <p>Create and download professional resumes with ease.</p>
          <a href="/resume-builder" className="home-link">
            Get Started
          </a>
        </div>

        <div className="home-card">
          <h2>OFFICE THINGS</h2>
          <p>Shop for office essentials and manage your cart.</p>
          <a href="/ecommerce" className="home-link">
            Explore Products
          </a>
        </div>

        <div className="home-card">
          <h2>Portfolio Creator</h2>
          <p>Build and showcase your professional portfolio.</p>
          <a href="/portfolio-creator" className="home-link">
            Create Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;