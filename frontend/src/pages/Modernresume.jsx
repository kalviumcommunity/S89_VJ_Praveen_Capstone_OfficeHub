import React from 'react';
import '../styles/Modernresume.css'; // Import the CSS file for styling

const Modernresume = () => {
  return (
    <div className="modern-resume">
      {/* Header Section */}
      <header className="resume-header">
        <h1>John Doe</h1>
        <p>Software Engineer | john.doe@example.com | (123) 456-7890</p>
      </header>

      {/* Summary Section */}
      <section className="resume-section">
        <h2>Summary</h2>
        <p>
          Highly motivated software engineer with 5+ years of experience in developing scalable web applications and working with modern technologies like React, Node.js, and Python.
        </p>
      </section>

      {/* Experience Section */}
      <section className="resume-section">
        <h2>Experience</h2>
        <div className="resume-item">
          <h3>Senior Software Engineer</h3>
          <p>ABC Tech Solutions | Jan 2020 - Present</p>
          <ul>
            <li>Developed and maintained scalable web applications using React and Node.js.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
            <li>Mentored junior developers and conducted code reviews.</li>
          </ul>
        </div>
        <div className="resume-item">
          <h3>Software Engineer</h3>
          <p>XYZ Innovations | Jun 2017 - Dec 2019</p>
          <ul>
            <li>Designed and implemented RESTful APIs using Python and Flask.</li>
            <li>Optimized application performance, reducing load times by 30%.</li>
            <li>Worked closely with clients to gather requirements and deliver solutions.</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-item">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>University of Technology | Graduated May 2017</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="resume-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>JavaScript (React, Node.js)</li>
          <li>Python (Django, Flask)</li>
          <li>HTML, CSS, and Responsive Design</li>
          <li>Database Management (MySQL, MongoDB)</li>
          <li>Version Control (Git, GitHub)</li>
        </ul>
      </section>
    </div>
  );
};

export default Modernresume;