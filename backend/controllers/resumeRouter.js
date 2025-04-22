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


module.exports = resumeRouter;
