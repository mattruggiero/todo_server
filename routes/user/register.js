const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const validateRegister = require('../../validator/validateRegister');

//DB queries
const userFindOne = require('../../dataBase_functions/query').userFindOne;
const createUser = require('../../dataBase_functions/query').createUser;
//DB commands 
const insertUser = require('../../dataBase_functions/command').insertUser;


router.all('/',async (req,res,next) => {
    console.log(req.method+': '+req.originalUrl);
    next();
})
.post('/',async (req,res) => {
    console.log(req.body);
    const { errors, isValid } = validateRegister(req.body);
    console.log(errors);
    if(!isValid) {return res.status(400).json(errors)}

    //let isUserAlreadyInDB = await User.findOne({email:req.body.email}).lean();
    let isUserAlreadyInDB = await userFindOne({email:req.body.email});
    if(isUserAlreadyInDB){
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
    }

    bcrypt.genSalt(10,(err,salt) => {
        bcrypt.hash(req.body.password, salt, async (err,hash)=> {
            if(err){console.log(error)}
            let newUserObject = await createUser({
                email: req.body.email,
                password:hash,
                userName:req.body.userName,
                firstName:req.body.firstName,
                lastName:req.body.lastName
            });
            insertUser(newUserObject);

        })
    })


    res.json({email:req.body.email,password:req.body.password});
})






module.exports = router;