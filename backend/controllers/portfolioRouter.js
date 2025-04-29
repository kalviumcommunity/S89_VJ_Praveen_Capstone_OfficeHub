const express = require('express');
const portfolioRouter = express.Router();
const Portfolio = require("../models/PortfolioSchema")

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
      const { userName, name, bio, skills, projects, contact } = req.body;
      const newPortfolio = new Portfolio({ userName, name, bio, skills, projects, contact });
      await newPortfolio.save();
      res.status(201).json({ message: 'Portfolio created successfully!', portfolio: newPortfolio });
    } catch (error) {
      res.status(500).json({ message: 'Error creating portfolio', error });
      console.log(error)
    }
  });
portfolioRouter.put('/updateportfolio/:id', async (req, res) => {
    try {
      const {id} = req.params;
      if(!id){
        return res.status(400).send({message:"Please provide id"});
      }
      const {userName, name, bio, skills, projects, contact} = req.body;
      const updatedPortfolio = await Portfolio.findOneAndUpdate({_id:id},
        {  userName, name, bio, skills, projects, contact  },
        { new: true }
      );
  
      if (!updatedPortfolio) {
        return res.status(404).send({ message: "Portfolio not found" });
      }
  
      res.status(200).send({ message: "Portfolio updated successfully", portfolio: updatedPortfolio });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error updating portfolio",error });
    }
  });
module.exports = portfolioRouter;