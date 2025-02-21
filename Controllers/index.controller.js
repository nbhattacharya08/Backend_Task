const userController = require('./user.controller');
const signUpController = require('./signup.controller');

const indexController = {
    user: userController,
    signUp: signUpController
};

module.exports = indexController;