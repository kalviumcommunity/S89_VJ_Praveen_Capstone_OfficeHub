import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Reuse the navbar styles from Home.css
import '../styles/resumeBuilder.css'; // Add a new CSS file for ResumeBuilder-specific styles

const ResumeBuilder = () => {
  // Define the templates array with valid image URLs
  const templates = [
    { id: 1, name: 'Modern Template', image: 'https://via.placeholder.com/200x300?text=Modern+Template' },
    { id: 2, name: 'Classic Template', image: 'https://via.placeholder.com/200x300?text=Classic+Template' },
    { id: 3, name: 'Creative Template', image: 'https://via.placeholder.com/200x300?text=Creative+Template' },
    { id: 4, name: 'Professional Template', image: 'https://via.placeholder.com/200x300?text=Professional+Template' },
  ];

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
      <section className="templates-section">
        <h2>Choose a Template</h2>
        <div className="templates-grid">
          {templates.map((template) => (
            <div key={template.id} className="template-card">
              <img src={template.image} alt={template.name} className="template-image" />
              <h3>{template.name}</h3>
              <button className="select-button">Select Template</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumeBuilder;