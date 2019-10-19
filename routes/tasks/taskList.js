const express = require('express');
const router = express.Router();

router.all('/',async (req,res,next) => {
    console.log(req.method+': '+req.originalUrl);
    next();
})
.get('/', async (req,res) => {
    res.send("taskList WORKS");
})

module.exports = router;