const express = require('express');
const Drouter = express.Router();
const {Device} = require('../models/OTSchema');
Drouter.get('/', async (req, res) => {
  try {
    
    const device = await Device.find();
    console.log(device)
    
    res.status(200).json(device);
  } catch (error) {
    
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});


module.exports = Drouter;