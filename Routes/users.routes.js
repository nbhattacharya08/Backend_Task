const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

//Get all Users
router.get('/users', (req, res) => {
        users = usersController.getUsers();
    }
);

//Get a User by ID
router.get('/users/:id', (req, res) => {
        user = usersController.getUser(req.params.id);
    }
);

//Create a User
router.post('/users', (req, res) => {
        usersController.createUser(req.body);
    }
);

//Update a User
router.put('/users/:id', (req, res) => {
        usersController.updateUser(req.params.id, req.body);
    }
);

//Delete a User
router.delete('/users/:id', (req, res) => {
        usersController.deleteUser(req.params.id);
    }
);

module.exports = router;

