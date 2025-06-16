import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Icons for favorites and cart
import '../../src/styles/secondaryNavbar.css'; // Import CSS

const navpro = () => {
  return (
    <div className="secondary-navbar">
      <div className="navbar-content">
        <Link to="/favorites" className="navbar-item">
          <FaHeart size={24} className="icon" />
          <span>Favorites</span>
        </Link>
        <Link to="/cart" className="navbar-item">
          <FaShoppingCart size={24} className="icon" />
          <span>Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default navpro;
