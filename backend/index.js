const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT

const allowedOrigins = ["https://alumininet-seven.vercel.app","https://alumininet-admin.vercel.app","https://vercel.com/aswnss-m/alumininet/9P4aLgVWv5vgBgT2frW61XEwiZzm","https://vercel.com/aswnss-m/alumininet-admin/DVs3kuNkrX8ikPg6rdYHNEEEhVjE"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions)); // Use CORS middleware with custom options
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
registerRouter = require('./routes/register');
loginRouter = require('./routes/login');
userRouter = require('./routes/users');
blogRouter = require('./routes/blog');
adminRouter = require('./routes/admin');

app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to the backend"
    });
});

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