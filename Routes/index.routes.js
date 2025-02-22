const express = require('express');
const router = express.Router();
const authRouter = require('./auth.routes');

const userRouter = require('./users.routes');

router.use('/users', userRouter);
router.use('/auth', authRouter);

module.exports = router;