const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  summary: { type: String },
  education: [
    {
      institution: String,
      degree: String,
      year: String
    }
  ],
  experience: [
    {
      company: String,
      role: String,
      duration: String
    }
  ],
  skills: [String],
}, { timestamps: true });

const Resume = mongoose.model('Resume', ResumeSchema);
module.exports = Resume;
