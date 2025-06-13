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
import ModernResume from '../pages/ModernResume';
import WatchPage from '../pages/watch';
import ShoePage from '../pages/shoe';
import ProfessionalResume from '../pages/ProfessionalResume';
import LaptopPage from '../pages/laptop'; 
import PerfumePage from '../pages/perfume'; // Import the Perfume component
// import CartPage from '../pages/Cart';
import DevicePage from '../pages/Device';
import StationaryPage from '../pages/Stationary';
import AccessoryPage from '../pages/Accessory';
import OpenPage from '../pages/openPage';
import ClassicResume from '../pages/ClassicResume';
import CreativeResume from '../pages/CreativeResume';
// import FavoritesPage from '../components/FavoritesPage';


const AppRouter = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<OpenPage />} /> 
          <Route path="/home" element={<Home />} />
           <Route path="/classic-resume" element={<ClassicResume />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/professional-resume" element={<ProfessionalResume />} />
          <Route path="/portfolio-creator" element={<PortfolioCreator />} />
          <Route path="/ecommerce" element={<Ecommerce />} /> 
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/modern-resume" element={<ModernResume />} />
          <Route path="/watches" element={<WatchPage />} />
          <Route path='/laptop' element={<LaptopPage />} />
          <Route path='/shoe' element={<ShoePage />} />
          <Route path='/perfume' element={<PerfumePage />} />
          {/* <Route path='/cart' element={<CartPage />} /> */}
          <Route path='/devices' element={<DevicePage />} />
          {/* <Route path='/favorites' element={<FavoritePage />} /> */}
          <Route path='/Accessory' element={<AccessoryPage />} />
          <Route path='/Stationary' element={<StationaryPage />} />
          <Route path='/creative-resume' element={<CreativeResume />} />
          {/* <Route path='/favorites' element={<FavoritesPage />} /> */}
          
          
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;