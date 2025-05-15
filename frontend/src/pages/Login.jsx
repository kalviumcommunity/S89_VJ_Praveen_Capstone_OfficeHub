import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../components/Navbar'; // Import Navbar component
import Footer from '../components/Footer'; // Import Footer component
import '../styles/Login.css'; // Import styles for the login page
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios'; // Import axios for making HTTP requests


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/user/login', {
      email,
      password
    });
            window.location.href = '/';
        } catch (error) {
            alert(error.response?.data?.message || 'Something went wrong');
          }
};

  const handleGoogleSignIn = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  return (
    <div className="login-container">
      <Navbar /> {/* Add Navbar */}
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="or-divider">
          <span>OR</span>
        </div>
        <button 
          onClick={handleGoogleSignIn}
          className="google-signin-button"
        >
          <FaGoogle className="google-icon" />
          Sign in with Google
        </button>
        <div className="signup-link">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
      <Footer /> {/* Keep only one Footer */}
    </div>
  );
};

export default Login;