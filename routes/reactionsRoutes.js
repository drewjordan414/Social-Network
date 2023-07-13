const router = require('express').Router({ mergeParams: true });
const { createReaction, /* other controller functions */ } = require('../controllers/reactionsController');

router
    .route('/')
    .post(createReaction)

router
    .route('/:reactionId')
    .delete(deleteReaction)

module.exports = router;
