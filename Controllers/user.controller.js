const indexModel = require('../Models/index.model');
const userModel = indexModel.user;

const userController = {
    getUsers: async () => {
        return await userModel.find();
    },
    getUser: async (id) => {
        return await userModel.findById(id);
    },
    createUser: async (user) => {
        const userObject = {
            name: user.name,
            email: user.email,
            Role: user.Role
        };
        return await userModel.create(userObject);
    },
    updateUser: async (id, user) => {
        const userChanged = {
            name: user.name,
            email: user.email,
            role: user.role
        };
        return await userModel.findByIdAndUpdate(id, userChanged);
    },
    deleteUser: async (id) => {
        return await userModel.findByIdAndDelete(id);
    }
};

module.exports = userController;