const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const Blog = require("./Models/Blog.model");

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
studentsRouter = require('./routes/students');
aluminiRouter = require('./routes/alumini');
adminRouter = require('./routes/admin');
registerRouter = require('./routes/register');
loginRouter = require('./routes/login');
userRouter = require('./Routes/users');
blogRouter = require('./Routes/blog');

app.use('/students',studentsRouter);
app.use('/alumini',aluminiRouter);
app.use('/admin',adminRouter);
app.use('/register',registerRouter);
app.use('/login',loginRouter)
app.use('/users',userRouter)
app.use('/blog',blogRouter)

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})