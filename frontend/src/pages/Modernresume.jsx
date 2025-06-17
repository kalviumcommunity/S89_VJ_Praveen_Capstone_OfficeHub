import React, { useState } from 'react';
import '../styles/Modernresume.css';

const ModernResume = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    address: '',
    profile: '',
    languages: '',
    skills: '',
    experience: '',
    education: '',
    hobbies: '',
    photo: '',
  });

  const [showResume, setShowResume] = useState(false);
  const [photoPreview, setPhotoPreview] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo' && files && files[0]) {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        photo: file,
      }));
      setPhotoPreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResume(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modern-resume-container">
      {!showResume ? (
        <form className="modern-resume-form no-print" onSubmit={handleSubmit}>
          <h2>Build Your Resume</h2>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />
          {photoPreview && <img src={photoPreview} alt="Preview" className="preview-img" />}
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="title" placeholder="Profession" value={formData.title} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <textarea name="profile" placeholder="Profile Summary" value={formData.profile} onChange={handleChange} required />
          <textarea name="languages" placeholder="Languages (comma separated)" value={formData.languages} onChange={handleChange} />
          <textarea name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange} required />
          <textarea name="experience" placeholder="Experience (one per line)" value={formData.experience} onChange={handleChange} required />
          <textarea name="education" placeholder="Education (one per line)" value={formData.education} onChange={handleChange} required />
          <textarea name="hobbies" placeholder="Hobbies (comma separated)" value={formData.hobbies} onChange={handleChange} />
          <button type="submit" className="modern-btn">Generate Resume</button>
        </form>
      ) : (
        <div className="resume-preview">
          <div className="print-buttons no-print">
            <button className="modern-details-btn" onClick={() => setShowResume(false)}>Edit Resume</button>
            <button className="modern-details-btn" onClick={handlePrint}>Print Resume</button>
          </div>

          <div className="resume-left">
            <div className="photo-wrapper">
              {photoPreview && <img src={photoPreview} alt="Profile" className="photo" />}
            </div>
            <div className="section-title">CONTACT</div>
            <div className="contact-info">
              <p>📱 {formData.phone}</p>
              <p>📧 {formData.email}</p>
              <p>📍 {formData.address}</p>
            </div>
            <div className="section-title">LANGUAGES</div>
            <div className="languages">
              {formData.languages.split(',').map((lang, i) => (
                <div key={i} className="bar-container">
                  <span>{lang.trim()}</span>
                  <div className="bar"><div className="fill"></div></div>
                </div>
              ))}
            </div>
            <div className="section-title">SKILLS</div>
            <div className="skills">
              {formData.skills.split(',').map((skill, i) => (
                <div key={i} className="bar-container">
                  <span>{skill.trim()}</span>
                  <div className="bar"><div className="fill"></div></div>
                </div>
              ))}
            </div>
            <div className="section-title">HOBBIES</div>
            <div className="hobbies">
              {formData.hobbies.split(',').map((hobby, i) => (
                <span key={i} className="hobby-icon">🎯</span>
              ))}
            </div>
          </div>

          <div className="resume-right">
            <div className="header">
              <h1>{formData.name}</h1>
              <h2>{formData.title}</h2>
            </div>

            <div className="section">
              <h3>PROFILE</h3>
              <p>{formData.profile}</p>
            </div>

            <div className="section">
              <h3>EDUCATION</h3>
              <ul>
                {formData.education.split('\n').map((edu, i) => (
                  <li key={i}>{edu.trim()}</li>
                ))}
              </ul>
            </div>

            <div className="section">
              <h3>EXPERIENCE</h3>
              <ul>
                {formData.experience.split('\n').map((exp, i) => (
                  <li key={i}>{exp.trim()}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernResume;


// import React, { useState } from 'react';
// import '../styles/ModernResume.css';

// const ModernResume = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     title: '',
//     phone: '',
//     email: '',
//     address: '',
//     profile: '',
//     languages: '',
//     skills: '',
//     experience: '',
//     education: '',
//     hobbies: '',
//     photo: '',
//   });

//   const [showResume, setShowResume] = useState(false);
//   const [photoPreview, setPhotoPreview] = useState('');

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'photo' && files && files[0]) {
//       const file = files[0];
//       setFormData((prev) => ({
//         ...prev,
//         photo: file,
//       }));
//       setPhotoPreview(URL.createObjectURL(file));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowResume(true);
//   };

//   return (
//     <div className="modern-resume-container">
//       {!showResume ? (
//         <form className="modern-resume-form" onSubmit={handleSubmit}>
//           <h2>Build Your Resume</h2>
//           <input type="file" name="photo" accept="image/*" onChange={handleChange} />
//           {photoPreview && <img src={photoPreview} alt="Preview" className="preview-img" />}
//           <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
//           <input type="text" name="title" placeholder="Profession" value={formData.title} onChange={handleChange} required />
//           <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//           <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
//           <textarea name="profile" placeholder="Profile Summary" value={formData.profile} onChange={handleChange} required />
//           <textarea name="languages" placeholder="Languages (comma separated)" value={formData.languages} onChange={handleChange} />
//           <textarea name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange} required />
//           <textarea name="experience" placeholder="Experience (one per line)" value={formData.experience} onChange={handleChange} required />
//           <textarea name="education" placeholder="Education (one per line)" value={formData.education} onChange={handleChange} required />
//           <textarea name="hobbies" placeholder="Hobbies (comma separated)" value={formData.hobbies} onChange={handleChange} />
//           <button type="submit" className="modern-btn">Generate Resume</button>
//         </form>
//       ) : (
//         <div className="resume-preview">
//           <div className="resume-left">
//             <div className="photo-wrapper">
//               {photoPreview && <img src={photoPreview} alt="Profile" className="photo" />}
//             </div>
//             <div className="section-title">CONTACT</div>
//             <div className="contact-info">
//               <p>📱 {formData.phone}</p>
//               <p>📧 {formData.email}</p>
//               <p>📍 {formData.address}</p>
//             </div>
//             <div className="section-title">LANGUAGES</div>
//             <div className="languages">
//               {formData.languages.split(',').map((lang, i) => (
//                 <div key={i} className="bar-container">
//                   <span>{lang.trim()}</span>
//                   <div className="bar"><div className="fill"></div></div>
//                 </div>
//               ))}
//             </div>
//             <div className="section-title">SKILLS</div>
//             <div className="skills">
//               {formData.skills.split(',').map((skill, i) => (
//                 <div key={i} className="bar-container">
//                   <span>{skill.trim()}</span>
//                   <div className="bar"><div className="fill"></div></div>
//                 </div>
//               ))}
//             </div>
//             <div className="section-title">HOBBIES</div>
//             <div className="hobbies">
//               {formData.hobbies.split(',').map((hobby, i) => (
//                 <span key={i} className="hobby-icon">🎯</span>
//               ))}
//             </div>
//           </div>

//           <div className="resume-right">
//             <div className="header">
//               <h1>{formData.name}</h1>
//               <h2>{formData.title}</h2>
//             </div>

//             <div className="section">
//               <h3>PROFILE</h3>
//               <p>{formData.profile}</p>
//             </div>

//             <div className="section">
//               <h3>EDUCATION</h3>
//               <ul>
//                 {formData.education.split('\n').map((edu, i) => (
//                   <li key={i}>{edu.trim()}</li>
//                 ))}
//               </ul>
//             </div>

//             <div className="section">
//               <h3>EXPERIENCE</h3>
//               <ul>
//                 {formData.experience.split('\n').map((exp, i) => (
//                   <li key={i}>{exp.trim()}</li>
//                 ))}
//               </ul>
//             </div>

//             <button className="modern-btn" onClick={() => setShowResume(false)}>
//               Edit Resume
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ModernResume;