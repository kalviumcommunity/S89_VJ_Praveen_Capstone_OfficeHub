
const express = require('express');
const router = express.Router();
const {Watch} = require('../models/OTSchema');
router.get('/', async (req, res) => {
  try {
    
    const watches = await Watch.find();
    console.log(watches)
    
    res.status(200).json(watches);
  } catch (error) {
    
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});


module.exports = router;