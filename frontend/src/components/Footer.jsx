import React from 'react';
import '../styles/Footer.css'; // Import footer styles
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaFacebook } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section: Quick Links */}
        <div className="footer-left">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Right Section: Social Media */}
        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="mailto:example@example.com"><FaEnvelope /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          © 2025 OfficeHub. All rights reserved. 
          <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;