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


module.exports = portfolioRouter;