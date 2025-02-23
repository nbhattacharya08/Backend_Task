const userController = require('./user.controller');
const authController = require('./auth.controller');

const indexController = {
    user: userController,
    auth: authController
};

module.exports = indexController;