import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ResumeBuilder from '../pages/ResumeBuilder';
import PortfolioCreator from '../pages/PortfolioCreator';
import Ecommerce from '../pages/Ecommerce';
import Footer from '../components/Footer'; // Import Footer component

const AppRouter = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/portfolio-creator" element={<PortfolioCreator />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
        </Routes>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
};

export default AppRouter;