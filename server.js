// git add . 
// git commit -m "comment"
// git push -u origin master

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoDB = require('./config/keys').mongoURI;
const app = express();
const passport = require('passport');

const register = require('./routes/user/register');
const login = require('./routes/user/login');

//mongo
mongoose
    .connect(mongoDB,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/*+json'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
require('./config/passport')(passport);

//routes


app.use('/register',register);
app.use('/login',login);

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Server running on port ${port}`));
