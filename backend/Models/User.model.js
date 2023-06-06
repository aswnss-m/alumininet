const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    batch: {
        type: String,
        required: true,
    },
    type: {
        type: Boolean,
        default: false,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    job: {
        type: String,
    },
    company: {
        type: String,
    },
    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog",
        },
    ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
