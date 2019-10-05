const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const User = require('../../models/User');
const passport = require('passport');


router.all('/',async (req,res,next) => {
    console.log(req.method+': '+req.originalUrl);
    next();
})









module.exports = router;