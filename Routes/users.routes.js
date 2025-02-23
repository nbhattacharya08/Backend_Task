const express = require('express');
const router = express.Router();
const indexController = require('../Controllers/index.controller');
const usersController = indexController.user;
const indexMiddleware = require('../Middleware/index.middleware');
const verifyTokenMiddleware = indexMiddleware.verifyToken;
const verifyAdminMiddleware = indexMiddleware.verifyAdmin;

// Protect all routes with verifyTokenMiddleware
router.use(verifyTokenMiddleware);

// Get all Users
router.get('/', async (req, res) => {
    try {
        const users = await usersController.getUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a User by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await usersController.getUser(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a User
router.post('/', async (req, res) => {
    try {
        const newUser = await usersController.createUser(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a User
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await usersController.updateUser(req.params.id, req.body);
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a User
router.delete('/:id', verifyAdminMiddleware ,async (req, res) => {
    try {
        const deletedUser = await usersController.deleteUser(req.params.id);
        if (deletedUser) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

