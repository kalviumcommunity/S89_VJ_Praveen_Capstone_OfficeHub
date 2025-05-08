import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ResumeBuilder from '../pages/ResumeBuilder';
import PortfolioCreator from '../pages/PortfolioCreator';
import Ecommerce from '../pages/Ecommerce'; // Import the Ecommerce component
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Footer from '../components/Footer';
import Clothing from '../pages/Clothing'; // Import the Clothing component
import Navbar from '../components/Navbar';  
import Modernresume from '../pages/Modernresume'; // Import Modernresume component


const AppRouter = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/portfolio-creator" element={<PortfolioCreator />} />
          <Route path="/ecommerce" element={<Ecommerce />} /> 
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/modern-resume" element={<Modernresume />} /> {/* Add route for Modernresume */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;