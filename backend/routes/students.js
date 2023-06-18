const express = require('express');
const router = express.Router();
const User = require('../Models/User.model');

// Route to get users with "type" value false
router.route('/all').get((req, res) => {
  User.find({ type: "false" })
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
