const joi = require('joi');

const userSchema = joi.object().keys({

    name: joi.string()
        .min(3)
        .max(30)
        .required(),

    email: joi.string()
        .email()
        .required(),
    role: joi.string()
        .valid('admin', 'user')
        .insensitive()
        .default('user')
        .required()
    
}).unknown(true);

module.exports = userSchema;