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
router.get('/', usersController.getUsers);

// Get a User by ID
router.get('/:id', usersController.getUser);

// Create a User
router.post('/', usersController.createUser);

// Update a User
router.put('/:id', usersController.updateUser);

// Delete a User
router.delete('/:id', verifyAdminMiddleware , usersController.deleteUser);

module.exports = router;

