const indexModel = require('../Models/index.model');
const userModel = indexModel.user;
const mongoose = require('mongoose');

const userController = {
    getUsers: async (req , res) => {
        try{
            const users = await userModel.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ 
                error: err.message
            });
        }
    },
    getUser: async (req,res) => {
        try{
            const id = req.body.id;
            const user = await userModel.findById(id);
            if(user){
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (err) {
            res.status(500).json({ 
                error: err.message
            });
        }
    },
    createUser: async (req,res) => {
        const userObject = {
            name: req.body.name,
            email: req.body.email,
            role: req.body.role
        };
        try{
            const newUser = await userModel.create(userObject);
            res.status(201).json(newUser);
        } catch (err) {
            res.status(500).json({ 
                error: err.message
            });
        }
    },
    updateUser: async (req,res) => {
        const userChanged = {
            name: req.body.name,
            email: req.body.email,
            role: req.body.role
        };
        try{
            const updatedUser = await userModel.findByIdAndUpdate(req.params.id, userChanged, {new: true});
            if(updatedUser){
                res.status(200).json(updatedUser);
            } else { req.params.id
                res.status(404).json({ message: 'User not found' });
            }
        } catch (err) {
            res.status(500).json({ 
                error: err.message
            });
        }
    },
    deleteUser: async (req,res) => {
        try{
            const userId = new mongoose.Types.ObjectId(req.params.id);
            const deletedUser = await userModel.findByIdAndDelete(userId);
            if(deletedUser){
                res.status(200).json({ message: 'User deleted successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (err) {
            res.status(500).json({ 
                error: err.message
            });
        }
    }
};

module.exports = userController;