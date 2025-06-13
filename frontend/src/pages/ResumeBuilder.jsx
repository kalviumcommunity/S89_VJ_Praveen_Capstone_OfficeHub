import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Home.css';
import '../styles/resumeBuilder.css';

const ResumeBuilder = () => {
  const navigate = useNavigate();

  const templates = [
    { id: 1, name: 'Modern Template', image: 'https://i.pinimg.com/736x/4f/7b/b4/4f7bb4c1fe59003a7a79f7f7cd2072e5.jpg' },
    { id: 2, name: 'Classic Template', image: 'https://i.pinimg.com/736x/bb/fc/25/bbfc255cb3802ae059746fa2f3148afd.jpg' },
    { id: 3, name: 'Creative Template', image: 'https://i.pinimg.com/736x/05/d4/4c/05d44c749a5ba59ae51ba6c123f1f073.jpg' },
    { id: 4, name: 'Professional Template', image: 'https://i.pinimg.com/736x/e1/85/97/e185977b59b0896d5d88c49e322df588.jpg' },
  ];

  // Pass template id to handler
  const handleSelectTemplate = (id) => {
    if (id === 1) {
      navigate('/modern-resume');
    }
    if (id === 2) {
      navigate('/classic-resume');
    }
    if (id === 3) {
      navigate('/creative-resume');
    }
    if (id === 4) {
      navigate('/professional-resume');
    }
    // Add more navigation logic for other templates here if needed
  };

  return (
    <div className="home-container">
      <Navbar />
      <header className="home-header-resume">
        <h1>Resume Builder</h1>
        <p>Build your professional resume with ease.</p>
      </header>
      <section className="templates-section">
        <h2>Choose a Template</h2>
        <div className="templates-grid">
          {templates.map((template) => (
            <div key={template.id} className="template-card">
              <img src={template.image} alt={template.name} className="template-image" />
              <h3>{template.name}</h3>
              <button
                className="select-button"
                onClick={() => handleSelectTemplate(template.id)}
              >
                Select Template
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumeBuilder;