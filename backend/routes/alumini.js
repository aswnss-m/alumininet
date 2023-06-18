const express = require('express');
const router = express.Router();
const User = require('../Models/User.model');


//Route to get one user by id
router.route('/:id').get((req, res) => {
    User.findById(req.params.id, "-password")
      .then(user => {
        res.json(user)})
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
// Route to get users with "type" value true
router.route('/all').get((req, res) => {
    User.find({ type: "true" })
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
module.exports = router;