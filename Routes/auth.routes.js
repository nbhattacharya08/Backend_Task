const express = require('express');
const router = express.Router();
const indexController = require('../Controllers/index.controller');
const signupController = indexController.signUp;
const loginController = indexController.login;

router.post('/signup', async (req, res) => {
    try{
        const data = await signupController.create(req.body);
        res.status(201).json(data);

    }catch(err){
        res.status(500).json({message: err.message});
    }
});

router.post('/login', async (req , res) => {
    try{
        const data = await loginController.login(req.body);
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;