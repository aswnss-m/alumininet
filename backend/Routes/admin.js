const express = require('express');
const router = express.Router();
const User = require('../Models/User.model');

// Route to get all users without sensitive information
router.route('/all').get((req, res) => {
    User.find({}, '-password') // Exclude the password field
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;