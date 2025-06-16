import { useState } from "react";
import '../styles/PortfolioCreator.css';
import bak from '../../../images/port.mp4';
import React from 'react';
import Navbar from '../components/Navbar';

export default function PortfolioBuilder() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    summary: "",
    languages: "",
    skills: "",
  });
  const [image, setImage] = useState(null);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showSkills, setShowSkills] = useState(false); // Added state for skills visibility

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = () => {
    setShowPortfolio(true);
  };

  const handleShowLanguages = () => {
    setShowLanguages((prev) => !prev);
  };

  const handleDownload = () => {
    const content = `
Name: ${form.name}
Title: ${form.title}
Location: ${form.location}
Phone: ${form.phone}
Email: ${form.email}
Summary: ${form.summary}
Languages: ${form.languages}
Skills: ${form.skills}
    `;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${form.name || "portfolio"}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="portfolio-bg-wrapper">
      {showPortfolio && (
        <video
          className="portfolio-bg-video"
          src={bak}
          autoPlay
          loop
          muted
          playsInline
        />
      )}
      <div className="portfolio-container">
        <Navbar />
        {!showPortfolio ? (
          <>
            <h1>Build Your portfolio</h1>
            <div className="form-group">
              <label>Upload Profile Picture</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="file-input" />
            </div>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" name="phone" placeholder="Your phone number" value={form.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="example@email.com" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Profile Summary</label>
              <textarea  name="summary" placeholder="A brief summary about you" value={form.summary} onChange={handleChange} rows={3} />
            </div>
            <div className="form-group">
              <label>Languages (comma separated)</label>
              <textarea name="languages" placeholder="e.g. English, Hindi, Spanish" value={form.languages} onChange={handleChange} rows={2} />
            </div>
            <div className="form-group">
              <label>Skills (comma separated)</label>
              <textarea name="skills" placeholder="e.g. React, Node.js, CSS" value={form.skills} onChange={handleChange} rows={2} />
            </div>
            <button onClick={handleGenerate}>Generate Portfolio</button>
          </>
        ) : (
          <div className="portfolio-generated">
            <div className="portfolio-hero-section">
              <div className="portfolio-hero-left">
                <div className="portfolio-hero-title">{form.title}</div>
                <div className="portfolio-hero-hi">
                  Hi, I'm <span className="highlight">{form.name || "Kevin"}</span>
                </div>
                {/* Profile Summary in uppercase, below name */}
                {form.summary && (
                  <div className="portfolio-profile-summary-hero">
                    {form.summary.toUpperCase()}
                  </div>
                )}
                {/* Contact details horizontally below summary */}
                <div className="portfolio-contact-details-hero">
                  {form.phone && (
                    <span>
                      <b>📞</b> {form.phone}
                    </span>
                  )}
                  {form.email && (
                    <span>
                      <b>✉️</b> {form.email}
                    </span>
                  )}
                </div>
                <div className="portfolio-hero-location">
                  {form.location}
                </div>
              </div>
              <div className="portfolio-hero-right">
                {image && (
                  <img src={image} alt="Profile" className="portfolio-hero-img" />
                )}
              </div>
            </div>
            {showLanguages && (
              <div className="portfolio-languages-list" style={{marginBottom: "1.5rem"}}>
                <h2 style={{color: "#fafafc", fontSize: "1.5rem"}}>Languages</h2>
                <ul>
                  {form.languages
                    .split(",")
                    .map((lang, idx) => lang.trim())
                    .filter(Boolean)
                    .map((lang, idx) => (
                      <li key={idx} style={{color: "#fafafc", fontSize: "1.1rem", marginBottom: "0.5rem"}}>
                        {lang}
                      </li>
                    ))}
                </ul>
              </div>
            )}
            {showSkills && (
              <div className="portfolio-skills-list" style={{marginBottom: "1.5rem"}}>
                <h2 style={{color: "#fafafc", fontSize: "1.5rem"}}>Skills</h2>
                <ul>
                  {form.skills
                    .split(",")
                    .map((skill, idx) => skill.trim())
                    .filter(Boolean)
                    .map((skill, idx) => (
                      <li key={idx} style={{color: "#fafafc", fontSize: "1.1rem", marginBottom: "0.5rem"}}>
                        {skill}
                      </li>
                    ))}
                </ul>
              </div>
            )}
            <div className="portfolio-btn-row">
              <button
                className="portfolio-language-btn"
                onClick={handleShowLanguages}
              >
                {showLanguages ? "Hide Languages" : "Show Languages"}
              </button>
              <button
                className="portfolio-skills-btn"
                onClick={() => setShowSkills((prev) => !prev)}
              >
                {showSkills ? "Hide Skills" : "Show Skills"}
              </button>
              <button onClick={handleDownload} className="portfolio-download-btn">
                Download Portfolio
              </button>
            </div>
            {/* Add more portfolio details as needed */}
          </div>
        )}
      </div>
    </div>
  );
}
