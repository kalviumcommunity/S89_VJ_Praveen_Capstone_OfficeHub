const express = require('express');
const Stationaryrouter = express.Router();
const {Stationary} = require('../models/OTSchema');
Stationaryrouter.get('/', async (req, res) => {
  try {
    
    const stationary = await Stationary.find();
    console.log(stationary)
    res.status(200).json(stationary);
  } catch (error) {
    
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});


module.exports = Stationaryrouter;