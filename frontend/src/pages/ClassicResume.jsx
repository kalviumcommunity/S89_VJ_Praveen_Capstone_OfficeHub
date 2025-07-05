import React, { useState, useRef } from "react";
import '../styles/ClassicResume.css'; // Use your existing CSS
import html2pdf from "html2pdf.js";

const ClassicResume = () => {
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
    experience: "",
    references: "",
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
          <input type="text" name="title" placeholder="Professional Title" value={formData.title} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <textarea name="profile" placeholder="Profile Summary" value={formData.profile} onChange={handleChange} required />
          <textarea name="education" placeholder="Education (one per line)" value={formData.education} onChange={handleChange} required />
          <textarea name="experience" placeholder="Work Experience (one per line)" value={formData.experience} onChange={handleChange} required />
          <textarea name="languages" placeholder="Languages (comma separated)" value={formData.languages} onChange={handleChange} required />
          <textarea name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange} required />
          <textarea name="references" placeholder="References (one per line)" value={formData.references} onChange={handleChange} />
          <button type="submit">Generate Resume</button>
        </form>
      ) : (
        <div className="classic-resume-preview" ref={resumeRef}>
          <div className="lefts">
            {photoPreview && <img src={photoPreview} alt="Profile" className="profile-pic" />}
            
            <h3>CONTACT</h3>
            <p>📞 {formData.phone}</p>
            <p>📧 {formData.email}</p>
            <p>📍 {formData.address}</p>

            <h3>EDUCATION</h3>
            <ul>
              {formData.education.split("\n").map((edu, i) => (
                <li key={i}>{edu.trim()}</li>
              ))}
            </ul>

            <h3>SKILLS</h3>
            <ul>
              {formData.skills.split(",").map((skill, i) => (
                <li key={i}>{skill.trim()}</li>
              ))}
            </ul>
          </div>

          <div className="Right">
            <h1>{formData.name}</h1>
            <h2>{formData.title}</h2>

            <h3>PROFILE</h3>
            <p>{formData.profile}</p>

            <h3>WORK EXPERIENCE</h3>
            <ul>
              {formData.experience.split("\n").map((exp, i) => (
                <li key={i}>{exp.trim()}</li>
              ))}
            </ul>

            <h3>LANGUAGES</h3>
            <p>{formData.languages}</p>

            {formData.references.trim() && (
              <>
                <h3>REFERENCES</h3>
                <ul>
                  {formData.references.split("\n").map((ref, i) => (
                    <li key={i}>{ref.trim()}</li>
                  ))}
                </ul>
              </>
            )}

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

export default ClassicResume;
