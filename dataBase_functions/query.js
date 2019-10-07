const User = require('../models/User');


module.exports = {
    async userFindOne(searchValue){
        let user = User.findOne(searchValue);
        return user;
    },
    async userFindById(searchValue){
        let user = User.findById(searchValue);
        return user; 
    },
    async createUser(requiredFields){
        for(key in requiredFields){
            console.log(requiredFields[key]);
        }
        let newUser = await new User (requiredFields);
        return newUser; 
    }

}
