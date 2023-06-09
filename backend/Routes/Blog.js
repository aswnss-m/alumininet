const express = require('express');
const router = express.Router();
const User = require('../Models/User.model');
const Blog = require('../Models/Blog.model');


// Route to get all the blogs
router.route('/all').get((req, res) => {
    Blog.find().populate('user', '-password').then(blogs => res.json(blogs)).catch(err => res.status(400).json('Error: ' + err));
});

// Route to get all the blogs of a particular user
router.route('/user/:id').get((req, res) => {
    Blog.find({user: req.params.id}).populate('user', '-password').then(blogs => res.json(blogs)).catch(err => res.status(400).json('Error: ' + err));
});
// Route to post a blog by a user
router.route('/add').post((req, res) => {
    console.log("I was called")
    const content = req.body.content;
    const user = req.body.userId;
    const newBlog = new Blog({content, user});
    newBlog.save().then(() => { // add the blog to the user's blog list
        User.findById(user).then((user) => {
            user.blogs.push(newBlog._id);
            user.save()
        }).catch(err => res.status(400).json('Error: ' + err));
        res.json('Blog added!')
    }).catch(err => res.status(400).json('Error: ' + err));

})
module.exports = router;
