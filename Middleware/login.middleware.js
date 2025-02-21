const indexController = require('../controllers/index.controller');
const signupController = indexController.signup;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginMiddleware = async (req, res, next) => {
    if (req.body.email && req.body.password) {
        const data = signupController.get(req.body);
        if (data) {
            const isMatch = await bcrypt.compare(req.body.password, data.password);
            if (data.password === req.body.password) {
                const token = jwt.sign
                    ({
                        id: data.id,
                        email: data.email,
                        role: data.role
                    },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: 86400
                        }
                    );
                res.status(200).send({ auth: true, token: token });
            } else {
                res.status(400).send('Invalid password');
            }
        } else {
            res.status(400).send('User not found');
        }
        next();
    } else {
        res.status(400).send('Email and password are required');
    }
}

module.exports = loginMiddleware;