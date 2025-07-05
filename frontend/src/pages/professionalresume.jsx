import React, { useState, useRef } from "react";
import '../styles/professional.css';
import html2pdf from "html2pdf.js";

const ProfessionalResume = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    phone: "",
    email: "",
    address: "",
    profile: "",
    education: "",
    languages: "",
    skills: "",
    photo: "",
  });

  const [photoPreview, setPhotoPreview] = useState("");
  const [showResume, setShowResume] = useState(false);
  const resumeRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files && files[0]) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, photo: file }));
      setPhotoPreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResume(true);
  };

  // Download as PDF
  const handleDownload = () => {
    if (resumeRef.current) {
      html2pdf()
        .from(resumeRef.current)
        .set({ filename: `${formData.name || 'resume'}.pdf` })
        .save();
    }
  };

  return (
    <div className="resume-container">
      {!showResume ? (
        <form className="resume-form" onSubmit={handleSubmit}>
          <h2>Create Your Resume</h2>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="title" placeholder="Title (e.g., Student)" value={formData.title} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <textarea name="profile" placeholder="Profile Summary" value={formData.profile} onChange={handleChange} required />
          <textarea name="education" placeholder="Education (one per line)" value={formData.education} onChange={handleChange} required />
          <textarea name="languages" placeholder="Languages (comma separated)" value={formData.languages} onChange={handleChange} required />
          <textarea name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange} required />
          <button type="submit">Generate Resume</button>
        </form>
      ) : (
        <div className="resume-preview" ref={resumeRef}>
          <div className="left">
            {photoPreview && <img src={photoPreview} alt="Profile" className="profile-pic" />}
            <h3>PROFILE</h3>
            <p>{formData.profile}</p>

            <h3>CONTACT ME</h3>
            <p>📞 {formData.phone}</p>
            <p>📧 {formData.email}</p>
            <p>📍 {formData.address}</p>
          </div>

          <div className="rights">
            <h1>{formData.name}</h1>
            <h2>{formData.title}</h2>

            <h3>EDUCATION</h3>
            <ul>
              {formData.education.split("\n").map((edu, i) => (
                <li key={i}>{edu.trim()}</li>
              ))}
            </ul>

            <h3>LANGUAGE</h3>
            <p>{formData.languages}</p>

            <h3>COMPUTER SKILLS</h3>
            <ul>
              {formData.skills.split(",").map((skill, i) => (
                <li key={i}>{skill.trim()}</li>
              ))}
            </ul>

            <div className="buttons">
              <button onClick={() => setShowResume(false)}>Edit</button>
              <button onClick={handleDownload}>Download Resume</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionalResume;