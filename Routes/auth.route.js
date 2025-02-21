const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller');
const signupController = indexController.signup;
const indexMiddleware = require('../middlewares/index.middleware');
const loginMiddleware = indexMiddleware.login;

router.post('/auth/signup', async (req, res) => {
    try{
        const data = await signupController.create(req.body);
        res.status(201).json(data);

    }catch(err){
        res.status(500).json({message: err.message});
    }
});

router.post('/auth/login', loginMiddleware.login);

module.exports = router;