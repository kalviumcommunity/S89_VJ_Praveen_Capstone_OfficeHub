const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: 'http://localhost:5173/login' }),
  function(req, res) {
    // Successful authentication, redirect to frontend
    res.redirect('http://localhost:5173/home');
  });

module.exports = router;