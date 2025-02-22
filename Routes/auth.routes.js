const express = require('express');
const router = express.Router();
const indexController = require('../Controllers/index.controller');
const signupController = indexController.signUp;
const indexMiddleware = require('../Middleware/index.middleware');
const loginMiddleware = indexMiddleware.login;

router.post('/signup', async (req, res) => {
    try{
        const data = await signupController.create(req.body);
        res.status(201).json(data);

    }catch(err){
        res.status(500).json({message: err.message});
    }
});

router.post('/login', loginMiddleware);

module.exports = router;