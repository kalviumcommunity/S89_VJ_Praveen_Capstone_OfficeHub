const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  summary: { type: String },
  education: {type:[String]},
  experience: { type: [String]},
  skills: {type:[String]},
}, { timestamps: true });

const Resume = mongoose.model('Resume', ResumeSchema);
module.exports = Resume;
