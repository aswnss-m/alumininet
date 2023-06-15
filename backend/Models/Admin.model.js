const mongoose = require("mongoose");

const adminSchema  = new mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required:true,
    },
    events:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
    }],
    news:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'News',
    }],

},{timestamps: true})

const Admin = mongoose.model("Admin",adminSchema);
module.exports = Admin;