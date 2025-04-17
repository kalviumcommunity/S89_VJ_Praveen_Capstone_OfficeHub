const express = require('express');
const portfolioRouter = express.Router();

const portfolioTemplates = [
    { name: "Minimal", theme: "Light" },
    { name: "Creative", theme: "Dark" }
];

portfolioRouter.get('/templates', (req, res) => {
    res.status(200).send(portfolioTemplates);
  });

module.exports = portfolioRouter;