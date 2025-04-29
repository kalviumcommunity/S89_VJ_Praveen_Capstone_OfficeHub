const express = require('express');
const resumeRouter = express.Router();
const Resume = require("../models/ResumeSchema")

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
    console.log(error);
    res.status(500).json({ message: 'Error creating resume', error });
  }
});
resumeRouter.put('/updateresume/:id', async (req, res) => {
  try {
    const {id} = req.params;
    if(!id){
      return res.status(400).send({message:"Please provide id"});
    }
    const {name, email, phone, summary, education, experience, skills} = req.body;
    const updatedResume = await Resume.findOneAndUpdate({_id:id},
      { name, email, phone, summary, education, experience, skills },
      { new: true }
    );

    if (!updatedResume) {
      return res.status(404).send({ message: "Resume not found" });
    }

    res.status(200).send({ message: "Resume updated successfully", Resume: updatedResume });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error updating resume",error });
  }
});

module.exports = resumeRouter;
