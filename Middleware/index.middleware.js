const verifyToken = require('./verifyToken.middleware');
const verifyAdmin = require('./verifyAdmin.middleware');

module.exports = {
    verifyToken: verifyToken,
    verifyAdmin: verifyAdmin
};