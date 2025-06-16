import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Home.css';
import logo from '../../../images/l.png';
import vid from '../../../images/ba.mp4'; // Import your video if needed

const Home = () => {
  return (
    <div className="home-container">
      <Navbar /> {/* Navbar imported and fixed */}
      

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
   console.log("Home page rendered");
};

export default Home;