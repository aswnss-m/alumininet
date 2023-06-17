const express = require('express');
const router = express.Router();
const User = require('../Models/User.model');
const Admin = require('../Models/Admin.model');
const Blog = require('../Models/Blog.model');
const Event = require('../Models/Event.model');
const News = require('../Models/News.model');

// Route to get all student accounts
router.get('/all/students', (req, res) => {
  User.find({ type: false }) // Find users with type value false (students)
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Route to get all alumni accounts
router.get('/all/alumni', (req, res) => {
  User.find({ type: true }) // Find users with type value true (alumni) 
    .then(alumni => res.json(alumni))
    .catch(err => res.status(400).json('Error: ' + err));
});
// Route to delete an alumni account
router.route('/delete/alumni').delete((req, res) => {
  const id = req.query.id;
  
  // Find the user and delete the blogs associated with the user
  Blog.deleteMany({ author: id })
    .then(() => {
      // Delete the user
      User.findByIdAndDelete(id)
        .then(() => res.json('Alumni deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
// Route to delete an alumni account
router.route('/delete/student').delete((req, res) => {
  const id = req.query.id;
  User.findByIdAndDelete(id)
    .then(() => res.json('Alumni deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});



// Route to get all users without sensitive information
router.route('/all').get((req, res) => {
    User.find({}) // Exclude the password field
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  //get all the admins
router.route('/all/admins').get((req, res) => {
    Admin.find().then(admins => res.json(admins)).catch(err => res.status(400).json('Error: ' + err));
});

//route to add admin
router.route('/add/admin').post((req, res) => {
    const { name, username, password } = req.body;
    const newAdmin = new Admin({
      name,
      username,
      password,
    });
    newAdmin.save()
      .then(() => res.json('Admin added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// login route for admin
router.route('/login').post(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username, password);

  try {
    const admin = await Admin.findOne({ username });
    console.log(admin)
    if (admin) {
      if (admin.password === password) {
        console.log("Admin logged in successfully")
        res.json({ success: true, message: "Admin logged in successfully",token:admin._id,user:admin.name});
      } else {
        res.json({ success: false, message: "Invalid password" });
      }
    } else {
      res.json({ success: false, message: "Invalid username" });
    }
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});
  

// Route to get all the events
router.route('/all/events').get((req, res) => {
    Event.find().then(events => res.json(events)).catch(err => res.status(400).json('Error: ' + err));
});

// Route to add event
router.route('/add/event').post((req, res) => {
  const { title, description, date, time, venue } = req.body;
  console.log(title, description, date, time, venue);

  // Format the date as needed
  const newEvent = new Event({
    title,
    description,
    date: date.toString(),
    time: time.toString(),
    venue,
  });

  newEvent
    .save()
    .then(() => res.json('Event added!'))
    .catch((err) =>{
      console.log(err)
       res.status(400).json('Error: ' + err)});
});

// Route to delete an event
router.route('/delete/event').delete((req, res) => {
  const id = req.query.id;
  Event.findByIdAndDelete(id)
    .then(() => res.json('Event deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
// get all news
router.route('/all/news').get((req, res) => {
  News.find().then(news => res.json(news)).catch(err => res.status(400).json('Error: ' + err));
});
// add news
router.route('/add/news').post((req, res) => {
  const { title, description, date} = req.body;
  console.log(title, description, date);

  const newNews = new News({
    title,
    description,
    date: date.toString(),
  });
  newNews
    .save()
    .then(() => res.json('News added!'))
    .catch((err) =>{
      console.log(err)
       res.status(400).json('Error: ' + err)}
        );
});

// delete news
router.route('/delete/news').delete((req, res) => {
  const id = req.query.id;
  News.findByIdAndDelete(id)
    .then(() => res.json('News deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;