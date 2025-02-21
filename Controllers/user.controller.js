const bcrypt = require('bcrypt');
const userModel = require('../Models/user.model');

const userController = {
    getUsers: async () => {
        return await userModel.find();
    },
    getUser: async (id) => {
        return await userModel.findById(id);
    },
    createUser: async (user) => {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        const userObject = {
            name: user.name,
            email: user.email,
            password: hashedPassword,
            Role: user.Role
        };
        return await userModel.create(userObject);
    },
    updateUser: async (id, user) => {
        const userChanged = {
            name: user.name,
            email: user.email,
            password: user.password
        };
        return await userModel.findByIdAndUpdate(id, userChanged);
    },
    deleteUser: async (id) => {
        return await userModel.findByIdAndDelete(id);
    }
};

module.exports = userController;