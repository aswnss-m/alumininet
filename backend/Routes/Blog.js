const express = require('express');
const router = express.Router();
const User = require('../Models/User.model');
const Blog = require('../Models/Blog.model');


//Route to get all the blogs
router.route('/all').get((req, res) => {
    Blog.find()
        .populate('user', '-password')
        .then(blogs => res.json(blogs))
        .catch(err => res.status(400).json('Error: ' + err));
    }
);

//Route to get all the blogs of a particular user
router.route('/user/:id').get((req, res) => {
    Blog.find({user: req.params.id})
        .populate('user', '-password')
        .then(blogs => res.json(blogs))
        .catch(err => res.status(400).json('Error: ' + err));
    }
);
