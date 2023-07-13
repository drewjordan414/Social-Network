const express = require('express');
const router = express.Router();
const userRoutes = require('./apiRoutes/userRoutes');
const thoughtRoutes = require('./apiRoutes/thoughtsRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
