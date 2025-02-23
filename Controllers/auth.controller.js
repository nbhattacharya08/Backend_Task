const indexModel = require('../Models/index.model');
const signupModel = indexModel.signUp;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {
    login: async (req , res) => {
        try {
            const data = await signupModel.findOne({ email: req.body.email });
            if (data) {
                const isMatch = await bcrypt
                    .compare(req.body.password, data.password);
                if (isMatch) {
                    const token = jwt.sign(
                        {
                            id: data.id,
                            email: data.email,
                            role: data.role
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: 86400
                        }
                    );
                    return res.status(200)
                        .send({ auth: true, token: token });
                } else {
                    return res.status(401)
                        .send('Invalid password');
                }
            } else {
                return res.status(404)
                    .send('User not found');
            }
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    },
    signup: async (req, res) => {
        try {
            const saltRounds = bcrypt.genSaltSync(8);
            const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
            const user = new signupModel({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                role: req.body.role
            });
            const data = await user.save();
            return res.status(201).send(data);
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = authController;