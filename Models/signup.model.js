const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const indexValidation = require('../Validations/index.validations');
const signupValidation = indexValidation.signUp;

// Define collection and schema for Signup
let Signup = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String   // For Role Based Authentication
    }
});

Signup.pre('save', async function (next) {
    try {
        const user = this;
        const validate = await signupValidation.validateAsync(user);
        if (validate) {
            next();
        }
    } catch (error) {
        next(error);
    }
}
);

module.exports = mongoose.model('Signup', Signup);