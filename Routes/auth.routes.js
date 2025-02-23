const express = require('express');
const router = express.Router();
const indexController = require('../Controllers/index.controller');
const authController = indexController.auth;

//Sign Up 
router.post('/signup', authController.signup);

//Login
router.post('/login', authController.login);


module.exports = router;