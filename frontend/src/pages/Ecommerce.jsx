import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Ecommerce.css'; // Updated CSS file for better styling

const Ecommerce = () => {
  const categories = [
    { id: 1, name: 'Clothing', image: 'https://via.placeholder.com/300x200?text=Clothing' },
    { id: 2, name: 'Laptops', image: 'https://via.placeholder.com/300x200?text=Laptops' },
    { id: 3, name: 'Stationery', image: 'https://via.placeholder.com/300x200?text=Stationery' },
    { id: 4, name: 'Electronics', image: 'https://via.placeholder.com/300x200?text=Electronics' },
    { id: 5, name: 'Furniture', image: 'https://via.placeholder.com/300x200?text=Furniture' },
    { id: 6, name: 'Accessories', image: 'https://via.placeholder.com/300x200?text=Accessories' },
    { id: 7, name: 'Books', image: 'https://via.placeholder.com/300x200?text=Books' },
    { id: 8, name: 'Gadgets', image: 'https://via.placeholder.com/300x200?text=Gadgets' },
  ];

  return (
    <div className="ecommerce-container">
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
      <header className="ecommerce-header">
        <h1>E-commerce</h1>
        <p>Explore a variety of office essentials and shop for what you need.</p>
      </header>
      <section className="categories-section">
        <h2>Categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img src={category.image} alt={category.name} className="category-image" />
              <h3>{category.name}</h3>
              <button className="explore-button">Explore</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;