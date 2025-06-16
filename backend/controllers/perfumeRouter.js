const express = require('express');
const prouter = express.Router();
const {Perfume} = require('../models/OTSchema');
prouter.get('/', async (req, res) => {
  try {
    
    const perfume = await Perfume.find();
    console.log(perfume)
    
    res.status(200).json(perfume);
  } catch (error) {
    
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});


module.exports = prouter;