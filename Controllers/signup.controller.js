const indexModel = require('../Models/index.model');
const signupModel = indexModel.signupModel;
const bcrypt = require('bcrypt');

const signupController = {
    create: async (user) => {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(user.password, salt);
            const signup = {
                name: user.name,
                email: user.email,
                password: hash,
                role: user.role
            }
            return await signupModel.create(signup);
    },
    get: async (user) => {
            email = user.email;
            return await signupModel.find({email: email});

    },
}

module.exports = signupController;