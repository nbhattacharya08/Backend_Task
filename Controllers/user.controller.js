const userModel = require('../Models/user.model');

const userController = {
    getUsers: async () => {
        return await userModel.find();
    },
    getUser: async (id) => {
        return await userModel.findById(id);
    },
    createUser: async (user) => {
        userObject = {
            name: user.name,
            email: user.email,
            password: user.password
        }
        return await userModel.create(userObject);
    },
    updateUser: async (id, user) => {
        userChanged = {
            name: user.name,
            email: user.email,
            password: user.password
        }
        return await userModel.findByIdAndUpdate(id, userChanged);
    },
    deleteUser: async (id) => {
        return await userModel.findByIdAndDelete(id);
    }
};

module.exports = userController;