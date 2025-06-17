import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Signup.css';
import { FaGoogle } from 'react-icons/fa';
import vid from '../../images/ba.mp4'; // <-- Import your video

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      return alert('Password and Confirm Password do not match');
    }

    try {
      const response = await axios.post('https://s89-vj-praveen-capstone-officehub-6.onrender.com/user/signup', formData);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify({
        name: response.data.name,
        id: response.data.id,
        email: formData.email
      }));

      setSuccess(response.data.message || 'Signup successful!');
      alert('Signup successful! Redirecting to login page...');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <>
      
      <div className="page-container">
        <video
          className="openpage-bg-video"
          src={vid} // Replace with your demo video URL
          autoPlay
          loop
          muted
        />
        <div className="signup-container">
          <div className="signup-form">
            <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
            <form onSubmit={handleSubmit}>
              {error && <p className="error-message">{error}</p>}
              {success && <p className="success-message">{success}</p>}

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <button type="submit" className="signup-button">Sign Up</button>

              <div className="or-divider"><span>or</span></div>

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
    window.location.href = 'https://s89-vj-praveen-capstone-officehub-6.onrender.com/auth/google';
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
