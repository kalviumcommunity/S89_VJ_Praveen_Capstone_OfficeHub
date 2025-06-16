const express = require('express');
const Accessoryrouter = express.Router();
const {Accessory} = require('../models/OTSchema');
Accessoryrouter.get('/', async (req, res) => {
  try {
    
    const accessory = await Accessory.find();
    console.log(accessory)
    
    res.status(200).json(accessory);
  } catch (error) {
    
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});


module.exports = Accessoryrouter;