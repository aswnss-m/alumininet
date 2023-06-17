const express = require('express');
const router = express.Router();
const User = require('../Models/User.model');

router.route('/profile').get((req, res) => {
  const id = req.query.id;
  console.log(id);
  User.findById(id, '-password') // Exclude the password field
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/author/:id').get((req, res) => {
  const id = req.params.id;
  console.log(id);
  User.findById(id, 'name job') // Retrieve only the name and job fields
    .then(user => res.json({
      name: user.name,
      job: user.job
    }))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;