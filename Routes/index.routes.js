const express = require('express');
const router = express.Router();

const userRouter = require('./users.routes');

router.use('/api', userRouter);

module.exports = router;