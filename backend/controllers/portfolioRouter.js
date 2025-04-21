const express = require('express');
const portfolioRouter = express.Router();
const Portfolio = require("../models/portfolioSchema")

const portfolioTemplates = [
    { name: "Minimal", theme: "Light" },
    { name: "Creative", theme: "Dark" },
    { name: "Primitive", theme: "Dark" }
];

portfolioRouter.get('/templates', (req, res) => {
    res.status(200).send(portfolioTemplates);
  });

portfolioRouter.post('/createportfolio', async (req, res) => {
    try {
      const { userId, name, bio, skills, projects, contact } = req.body;
      const newPortfolio = new Portfolio({ userId, name, bio, skills, projects, contact });
      await newPortfolio.save();
      res.status(201).json({ message: 'Portfolio created successfully!', portfolio: newPortfolio });
    } catch (error) {
      res.status(500).json({ message: 'Error creating portfolio', error });
    }
  });
module.exports = portfolioRouter;