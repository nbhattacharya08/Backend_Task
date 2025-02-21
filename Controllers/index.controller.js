const userController = require('./user.controller');
const signUpController = require('./signUp.controller');

const indexController = {
    user: userController,
    signUp: signUpController
};

module.exports = indexController;