const indexModel = require('../Models/index.model');
const signupModel = indexModel.signUp;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginController = {
    login: async (user) => {
        console.log(process.env.JWT_SECRET)
        const data = await signupModel.findOne({ email: user.email });
        if (data) {
            const isMatch = await bcrypt.compare(user.password, data.password);
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
                return { auth: true, token: token };
            } else {
                return 'Invalid password';
            }
        } else {
            return 'User not found';
        }

    }
}

module.exports = loginController;