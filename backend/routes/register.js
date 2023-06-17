const express = require('express');
const router = express.Router();
const User = require('../Models/User.model');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.route('/').post(upload.single('profile'), async (req, res) => {
  const { name, email, password, number, batch, branch, job, company } = req.body;
  console.log(req);
  try {
    const existingUser = await User.findOne({ email }); // Add await here
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    let type = false;
    const year = new Date().getFullYear();
    if (Number(batch) < year) {
      type = true;
    }
    // Create a new user object
    const newUser = new User({
      name,
      profile: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      },
      email,
      password,
      number,
      batch,
      branch,
      type,
      job: job || '',
      company: company || '',
    });

    // Save the new user
    await newUser.save(); // Add await here
    res.json('User added!');
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error: ' + error });
  }
});


module.exports = router;
