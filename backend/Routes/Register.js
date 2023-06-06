const express = require('express');
const router = express.Router();
const User = require('../Models/User.model');

router.route('/').post(async (req, res) => {
  const { name, email, username, password, number, batch, branch, job, company } = req.body;
  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    let type = false;
    const year = new Date().getFullYear();
    if (Number(batch) < year){
        type = true;
    }
    // Create a new user object
    const newUser = new User({
      name,
      email,
      username,
      password,
      number,
      batch,
      branch,
      type,
      job: job || '',
      company: company || '',
    });

    // Save the new user
    await newUser.save();
    res.json('User added!');
  } catch (error) {
    res.status(400).json({ message: 'Error: ' + error });
  }
});

module.exports = router;
