const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: 'https://officehub1.netlify.app/login' }),
  function(req, res) {
    // Successful authentication, redirect to frontend
    res.redirect('https://officehub1.netlify.app/home');
  });

module.exports = router;