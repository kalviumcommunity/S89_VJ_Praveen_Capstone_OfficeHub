import React, { useState } from "react";
import "../styles/CreativeResume.css";

const CreativeResume = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    phone1: "",
    phone2: "",
    email1: "",
    email2: "",
    address: "",
    about: "",
    education: "",
    interests: "",
    languages: "",
    skills: "",
    photo: "",
  });

  const [photoPreview, setPhotoPreview] = useState("");
  const [showResume, setShowResume] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files && files[0]) {
      setFormData((prev) => ({ ...prev, photo: files[0] }));
      setPhotoPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResume(true);
  };

  const handlePrint = () => window.print();

  return (
    <div className="resume-container">
      {!showResume ? (
        <form className="resume-form" onSubmit={handleSubmit}>
          <h2>Create Your Creative Resume</h2>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} required />
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          <input type="text" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} required />
          <input type="text" name="phone1" placeholder="Phone 1" value={formData.phone1} onChange={handleChange} required />
          <input type="text" name="phone2" placeholder="Phone 2" value={formData.phone2} onChange={handleChange} />
          <input type="email" name="email1" placeholder="Email 1" value={formData.email1} onChange={handleChange} required />
          <input type="email" name="email2" placeholder="Email 2" value={formData.email2} onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <textarea name="about" placeholder="About Me" value={formData.about} onChange={handleChange} required />
          <textarea name="education" placeholder="Education (one per line: Degree | Institute | Year)" value={formData.education} onChange={handleChange} required />
          <textarea name="interests" placeholder="Interests (comma separated)" value={formData.interests} onChange={handleChange} required />
          <textarea name="languages" placeholder="Languages (e.g., English:9, French:7)" value={formData.languages} onChange={handleChange} required />
          <textarea name="skills" placeholder="Skills (e.g., Communication:9, Customer Service:8)" value={formData.skills} onChange={handleChange} required />
          <button type="submit">Generate Resume</button>
        </form>
      ) : (
        <div className="resume-preview">
          <div className="Left-panel">
            {photoPreview && <img src={photoPreview} alt="Profile" className="profile-pic" />}

            <div className="contact-section">
              <h3>CONTACT</h3>
              <p>{formData.phone1}</p>
              <p>{formData.phone2}</p>
              <p>{formData.email1}</p>
              <p>{formData.email2}</p>
              <p>{formData.address}</p>
            </div>

            <div className="section">
              <h3>INTERESTS</h3>
              <ul>
                {formData.interests.split(",").map((item, idx) => (
                  <li key={idx}>{item.trim()}</li>
                ))}
              </ul>
            </div>

            <div className="section">
              <h3>LANGUAGES</h3>
              <ul>
                {formData.languages.split(",").map((lang, idx) => (
                  <li key={idx}>{lang.trim()}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="right-panel">
            <h1>{formData.firstName} <span className="highlight">{formData.lastName}</span></h1>
            <h2>{formData.jobTitle}</h2>

            <div className="section">
              <h3>About Me</h3>
              <p>{formData.about}</p>
            </div>

            <div className="section">
              <h3>Education</h3>
              {formData.education.split("\n").map((edu, idx) => {
                const [degree, institute, year] = edu.split("|");
                return (
                  <div key={idx} className="edu-item">
                    <h4>{degree?.trim()} [{year?.trim()}]</h4>
                    <p>{institute?.trim()}</p>
                  </div>
                );
              })}
            </div>

            <div className="section">
              <h3>Skills</h3>
              <div className="skills-container">
                {formData.skills.split(",").map((skill, idx) => {
                  const [name, level] = skill.split(":");
                  return (
                    <div key={idx} className="skill-item">
                      <div className="skill-name">{name?.trim()}</div>
                      <div className="skill-score">{level?.trim()}/10</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="buttons">
              <button onClick={() => setShowResume(false)}>Edit</button>
              <button onClick={handlePrint}>Print</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreativeResume;
