const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    Role: {
        type: String   // For Role Based Authentication
    }
});

module.exports = mongoose.model('Signup', Signup);