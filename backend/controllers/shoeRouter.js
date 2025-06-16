const express = require('express');
const srouter = express.Router();
const {Shoe} = require('../models/OTSchema');
srouter.get('/', async (req, res) => {
  try {
    
    const shoes = await Shoe.find();
    console.log(shoes)
    
    res.status(200).json(shoes);
  } catch (error) {
    
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});


module.exports = srouter;