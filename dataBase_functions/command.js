const User = require('../models/User');

module.exports = { 
    insertUser(userObject){
        userObject
            .save()
            .then(user => console.log(userObject.userName," -->> Entered in DB"))
            .catch(err  => console.log(err));
    }
}