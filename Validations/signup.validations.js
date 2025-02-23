const joi = require('joi');

const signupSchema = joi.object().keys({
    
    name: joi.string()
        .min(3)
        .max(30)
        .required(),

    email: joi.string()
        .email()
        .required(),
    password: joi.string()
        .min(6)
        .max(1000)
        .required(),
    role: joi.string()
        .valid('admin', 'user')
        .insensitive()
        .default('user')
        .required()
    
}).unknown(true);

module.exports = signupSchema;