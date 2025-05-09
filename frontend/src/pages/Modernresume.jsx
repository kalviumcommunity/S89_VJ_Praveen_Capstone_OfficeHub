import React from 'react';
import '../styles/Modernresume.css'; // Import the CSS file for styling
import userDetails from './userDetails'; // Import userDetails

const Modernresume = () => {
  return (
    <div className="modern-resume">
      {/* Header Section */}
      <header className="resume-header">
        <h1>{userDetails.name}</h1>
        <p>
          {userDetails.title} | {userDetails.email} | {userDetails.phone}
        </p>
      </header>

      {/* Summary Section */}
      <section className="resume-section">
        <h2>Summary</h2>
        <p>{userDetails.summary}</p>
      </section>

      {/* Experience Section */}
      <section className="resume-section">
        <h2>Experience</h2>
        {userDetails.experience.map((job, index) => (
          <div key={index} className="resume-item">
            <h3>{job.title}</h3>
            <p>
              {job.company} | {job.dates}
            </p>
            <ul>
              {job.responsibilities.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className="resume-section">
        <h2>Education</h2>
        {userDetails.education.map((edu, index) => (
          <div key={index} className="resume-item">
            <h3>{edu.degree}</h3>
            <p>
              {edu.institution} | {edu.graduationDate}
            </p>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section className="resume-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          {userDetails.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Modernresume;