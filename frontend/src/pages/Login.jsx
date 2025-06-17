import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Login.css';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import vid from '../../images/ba.mp4';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://s89-vj-praveen-capstone-officehub-6.onrender.com/user/login', {
        email,
        password
      });
      navigate('/home');
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href = 'https://s89-vj-praveen-capstone-officehub-6.onrender.com/auth/google';
  };

  return (
    <div className="openpage-container">
      <video
        className="openpage-bg-video"
        src={vid} // Replace with your demo video URL
        autoPlay
        loop
        muted
      />
      <div className="login-container">
       
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" >Email</label>
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
      </div>
    </div>
  );
};

export default Login;