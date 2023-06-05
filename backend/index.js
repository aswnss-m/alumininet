const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const port = process.env.PORT

app.use(cors());
app.use(express.json());

// Connecting to the db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Mongoose Connection established");
});

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})