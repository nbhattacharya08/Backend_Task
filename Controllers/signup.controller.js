const indexModel = require('../Models/index.model');
const signupModel = indexModel.signupModel;
const bcrypt = require('bcrypt');

const signupController = {
    create: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(req.body.password, salt);
            const signup = {
                name: req.body.name,
                email: req.body.email,
                password: hash,
                role: req.body.role
            }
            const data = await signupModel.create(signup);
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    get: async (req, res) => {
        try {
            email = req.body.email;
            const data = await signupModel.find({email: email});
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json(error);
        }
    },
}

module.exports = signupController;