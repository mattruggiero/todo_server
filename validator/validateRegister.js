const validator = require('validator');
const isEmpty = require('./isEmpty');

const validateRegister = data => {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email: '';
    data.password = !isEmpty(data.password) ? data.password:'';
    data.confirmPassword = !isEmpty(data.password) ? data.password:'';

    if(validator.isEmpty(data.email)){
        errors.email = 'Email Field is required';
    }
    if(!validator.isEmail(data.email)){
        errors.email = 'Not a valid email address';
    }
    if(validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }
    if(!(data.password===data.confirmPassword)){
        errors.password = 'Passwords do not match. ';
    }
    return{
        errors,
        isValid: isEmpty(errors)
    }
    
}

module.exports = validateRegister;
