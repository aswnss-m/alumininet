const express = require('express');
const router = express.Router();
const User = require('../Models/User.model');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.route('/').post(upload.single('profile'), async (req, res) => {
  const { name, email, password, number, batch, branch, job, company } = req.body;
  try {
    const existingUser = await User.findOne({ email }); // Add await here
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    let type = "false";
    const year = new Date().getFullYear();
    if (Number(batch) < year) {
      type = "true";
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
    res.status(400).json({ message: 'Error: ' + error });
  }
});

// add staff account
router.route('/add/staff').post(async (req, res) => {
  console.log(req.body)
  const {name, email, password, department} = req.body;
  try {
    const existingUser = await User.findOne({ email }); // Add await here
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
  const newStaff = new User({
    name,
    email,
    password,
    number: "222222222",
    batch: "2023",
    branch: department,
    type: "staff",
    job: "",
    company: "",
    profile: ""
  });
  await newStaff.save()
    .then(() => res.json('Staff added!'))
    .catch(err => {
      console.log(err)
      res.status(400).json('Error: ' + err)});
} catch (error) {
  console.log(error);
  res.status(400).json({ message: 'Error: ' + error });
  console.log(error);
}
});
  



module.exports = router;
