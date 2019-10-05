const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoDB = require('./config/keys').mongoURI;
const app = express();


//mongo
mongoose
    .connect(mongoDB,{
        useNewUrlParser:true,
        useCreateIndex:true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/*+json'}));
app.use(bodyParser.urlencoded({extended: false}));

//routes
// const register = require('./routes/user/register');
// const login = require('./routes/user/login');

// app.use('/register',register);
// app.use('/login',login);

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Server running on port ${port}`));
