const userModel = require('./user.model');
const signupModel = require('./signup.model');

const indexModels = {
    user: userModel,            // For CRUD Operations
    signup: signupModel         // For User Signup
};

module.exports = indexModels;


