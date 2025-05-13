import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Signup.css';
import { FaGoogle } from 'react-icons/fa';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate signup logic (replace with actual API call)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    alert('Signup successful!');
    navigate('/login'); // Redirect to login after signup
  };

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="signup-container">
          <div className="signup-form">
            <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
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

              <div className="or-divider">
                <span>or</span>
              </div>

              <GoogleSignUpButton />

              <p className="login-link mt-4">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

const GoogleSignUpButton = () => {
  const handleGoogleSignUp = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  return (
    <button 
      onClick={handleGoogleSignUp}
      className="google-signin-button"
    >
      <FaGoogle className="google-icon" />
      Sign up with Google
    </button>
  );
};

export default Signup;
