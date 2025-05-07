import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/OfficeThings.css'; // Import the CSS file for styling

const OfficeThings = () => {
  const categories = [
    { id: 1, name: 'Clothing', image: 'https://via.placeholder.com/150?text=Clothing' },
    { id: 2, name: 'Laptops', image: 'https://via.placeholder.com/150?text=Laptops' },
    { id: 3, name: 'Stationery', image: 'https://via.placeholder.com/150?text=Stationery' },
    { id: 4, name: 'Electronics', image: 'https://via.placeholder.com/150?text=Electronics' },
    { id: 5, name: 'Furniture', image: 'https://via.placeholder.com/150?text=Furniture' },
    { id: 6, name: 'Accessories', image: 'https://via.placeholder.com/150?text=Accessories' },
    { id: 7, name: 'Books', image: 'https://via.placeholder.com/150?text=Books' },
    { id: 8, name: 'Gadgets', image: 'https://via.placeholder.com/150?text=Gadgets' },
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
        <h1>Office Things</h1>
        <p>Explore a variety of office essentials and shop for what you need.</p>
      </header>
      <section className="categories-section">
        <h2>Categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img src={category.image} alt={category.name} className="category-image" />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OfficeThings;