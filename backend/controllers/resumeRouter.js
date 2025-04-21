const express = require('express');
const resumeRouter = express.Router();
const Resume = require("../models/resumeSchema")

const resumeTemplates = [
    { name: "Classic", layout: "Single Column" },
    { name: "Modern", layout: "Two Column" }
  ];

resumeRouter.get('/templates', (req, res) => {
    res.status(200).send(resumeTemplates);
});

resumeRouter.post('/create', async (req, res) => {
  try {
    const { name, email, phone, summary, education, experience, skills } = req.body;
    const newResume = new Resume({ name, email, phone, summary, education, experience, skills });
    await newResume.save();
    res.status(201).json({ message: 'Resume created successfully!', resume: newResume });
  } catch (error) {
    res.status(500).json({ message: 'Error creating resume', error });
  }
});
module.exports = resumeRouter;
