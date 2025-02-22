const userController = require('./user.controller');
const signUpController = require('./signup.controller');
const loginController = require('./login.controller');

const indexController = {
    user: userController,
    signUp: signUpController,
    login: loginController
};

module.exports = indexController;