const express = require('express');
const lprouter = express.Router();
const {Laptop} = require('../models/OTSchema');
lprouter.get('/', async (req, res) => {
  try {
    
    const laptops = await Laptop.find();
    console.log(laptops)
    
    res.status(200).json(laptops);
  } catch (error) {
    
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});


module.exports = lprouter;