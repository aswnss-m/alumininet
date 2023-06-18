const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../Models/User.model');

router.route('/').post(async (req, res) => {
  const { email, password } = req.body;
   
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    
    if (user.password !== password) {
      return res.status(401).json({ message: 'Wrong password' });
    }
    
    // Generate token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key');

    // Return token and user ID
    res.json({ token, userId: user._id });
  } catch (error) {
    res.status(400).json({ message: 'Error: ' + error });
  }
});

module.exports = router;
