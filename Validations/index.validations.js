const userValidation = require('./user.validations');
const signupValidation = require('./signup.validations');

module.exports = {
    user: userValidation,
    signUp: signupValidation
};  

