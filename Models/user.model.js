const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const indexValidation = require('../Validations/index.validations');
const userValidation = indexValidation.user;

// Define collection and schema for User
let User = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String
    },
});

User.pre('save', async function (next) {
    try {
        const user = this;
        const validate = await userValidation.validateAsync(user);
        if (validate) {
            next();
        }
    } catch (error) {
        next(error);
    }
}
);

module.exports = mongoose.model('User', User);
