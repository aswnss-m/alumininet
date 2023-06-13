const express = require('express');
const router = express.Router();
const User = require('../Models/User.model');
const Blog = require('../Models/Blog.model');


// Route to get all the blogs
router.route('/all').get((req, res) => {
    Blog.find().then(blogs => res.json(blogs)).catch(err => res.status(400).json('Error: ' + err));
});

// Route to get all the blogs of a particular user
router.route('/user/:id').get((req, res) => {
    Blog.find({user: req.params.id}).populate('author', '-password').then(blogs => res.json(blogs)).catch(err => res.status(400).json('Error: ' + err));
});
// Route to post a blog by a user
router.route('/add').post((req, res) => {
    const content = req.body.content;
    const user = req.body.userId;
    const newBlog = new Blog({content, author:user});
    newBlog.save().then(() => { // add the blog to the user's blog list
        User.findById(user).then((user) => {
            user.blogs.push(newBlog._id);
            user.save()
        }).catch(err => res.status(400).json('Error: ' + err));
        res.json('Blog added!')
    }).catch(err => res.status(400).json('Error: ' + err));

})
//get specific blog
router.route('/:id').get((req, res) => {
    Blog.findById(req.params.id).then(blog => res.json(blog)).catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
