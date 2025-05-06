const express = require('express');
const userRouter = express.Router();
const User = require("../models/UserSchema");


userRouter.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }


    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error registering user', error });
  }
});


userRouter.get('/getuser/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const users = await User.findOne({ email });

    if (!users) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching user', error });
  }
});

userRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Login failed', error });
  }
});

module.exports = userRouter;