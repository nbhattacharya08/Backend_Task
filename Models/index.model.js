const userModel = require('./user.model');
const signupModel = require('./signup.model');

const indexModels = {
    user: userModel,            // For CRUD Operations
    signUp: signupModel         // For User Signup
};

module.exports = indexModels;


