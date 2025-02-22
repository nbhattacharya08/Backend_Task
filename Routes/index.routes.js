const express = require('express');
const router = express.Router();
const authRouter = require('./auth.routes');

const userRouter = require('./users.routes');

router.use('/api', userRouter);
router.use('/api/auth', authRouter);

module.exports = router;