import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Import Navbar component
import '../styles/PortfolioCreator.css'; // Import CSS for styling

const PortfolioCreator = () => {
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    about: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    image: null, // Add image field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result }); // Save the image as a base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Portfolio generated successfully!');
  };

  return (
    <div className="portfolio-creator-container">
      <Navbar />
      <header className="portfolio-header">
        <h1>Portfolio Creator</h1>
        <p>Fill in your details to generate a beautiful portfolio.</p>
      </header>
      <section className="portfolio-form-section">
        <form className="portfolio-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
          <label>
            Profession:
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              placeholder="Enter your profession"
              required
            />
          </label>
          <label>
            About:
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              placeholder="Write a short bio about yourself"
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </label>
          <label>
            LinkedIn:
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="Enter your LinkedIn profile URL"
            />
          </label>
          <label>
            GitHub:
            <input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="Enter your GitHub profile URL"
            />
          </label>
          <label>
            Upload Image:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
          <button type="submit" className="generate-portfolio-button">
            Generate Portfolio
          </button>
        </form>
      </section>

      {/* Page 1: Introduction */}
      <section className="portfolio-page portfolio-intro">
        <h1>
          <span className="gold-text">Hi, I am</span> {formData.name || 'Your Name'}
        </h1>
        <h2 className="white-text">{formData.profession || 'Full Stack Developer'}</h2>
        <div className="intro-buttons">
          <button className="hire-me-button">Hire Me</button>
          <button className="my-works-button">My Works</button>
        </div>
      </section>

      {/* Page 2: Details */}
      <section className="portfolio-page portfolio-details-page">
        <div className="portfolio-details-container">
          {formData.image && (
            <img src={formData.image} alt="Profile" className="portfolio-image" />
          )}
          <div className="portfolio-details">
            <h3>{formData.name || 'Your Name'}</h3>
            <p>{formData.profession || 'Your Profession'}</p>
            <p>{formData.about || 'A short bio about yourself will appear here.'}</p>
            <p>Email: {formData.email || 'your.email@example.com'}</p>
            <p>Phone: {formData.phone || '123-456-7890'}</p>
            <div className="portfolio-social-icons">
              <a href={formData.linkedin || '#'} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={formData.github || '#'} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href={`mailto:${formData.email || ''}`}>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioCreator;