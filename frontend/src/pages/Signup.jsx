import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import Navbar component
import Footer from '../components/Footer'; // Import Footer component
import '../styles/Signup.css'; // Import styles for the signup page

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate signup logic (replace with actual API call)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    alert('Signup successful!');
    navigate('/login'); // Redirect to the login page after signup
  };

  return (
    <>
      <Navbar /> {/* Add Navbar */}
      <div className="signup-container">
        <div className="signup-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
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
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <Footer /> {/* Keep only one Footer */}
    </>
  );
};

export default Signup;