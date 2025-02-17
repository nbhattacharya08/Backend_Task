const express = require('express');
const router = express.Router();

const userRouter = require('./user.routes');

router.get('/api', userRouter);

module.exports = router;