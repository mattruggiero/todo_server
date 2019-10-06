const validator = require('validator');
const isEmpty = require('./isEmpty');

const validateRegister = data => {
    let errors = {};
    console.log("TODO: validateRegister");
    data.email = !isEmpty(data.email) ? data.email: '';
    data.password = !isEmpty(data.password) ? data.password:'';

    if(!validator.isEmail(data.email)){
        errors.email = 'Not a valid email address';
    }
    if(!validator.isEmpty(data.email)){
        errors.email = 'Email Field is required';
    }
    if(validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }
    
}

module.exports = validateRegister;
