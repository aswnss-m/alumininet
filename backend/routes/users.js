const express = require('express');
const router = express.Router();
const User = require('../Models/User.model');

router.route('/profile').get((req, res) => {
  const id = req.query.id;
   
  User.findById(id, '-password') // Exclude the password field
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/author/:id').get((req, res) => {
  const id = req.params.id;
  User.findById(id, 'name job') // Retrieve only the name and job fields
    .then(user => res.json({
      name: user.name,
      job: user.job,
      profile: user.profile,
      userid : user._id
    }))
    .catch(err => res.status(400).json('Error: ' + err));
});

// get profile picture
router.get('/profile/:id', (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'user not found' });
      }

      res.set('Content-Type', user.profile.contentType);
      res.send(user.profile.data);
    })
    .catch((err) => res.status(500).json({ message: 'Error: ' + err }));
});
module.exports = router;
router.delete('/delete', (req, res) => {
  const userId = req.query.id;
  User.findByIdAndDelete(userId)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});