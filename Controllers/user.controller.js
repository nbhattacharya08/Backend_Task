const userModel = require('../Models/user.model');

const userController = {
    getUsers: async () => {
        return await userModel.find();
    },
    getUser: async (id) => {
        return await userModel.findById(id);
    },
    addUser: async (user) => {
        return await userModel.create(user);
    },
    updateUser: async (id, user) => {
        return await userModel.findByIdAndUpdate(id, user, { new: true });
    },
    deleteUser: async (id) => {
        return await userModel.findByIdAndDelete(id);
    }
};

module.exports = userController;