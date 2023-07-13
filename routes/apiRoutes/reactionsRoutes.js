const router = require('express').Router({ mergeParams: true });
const { createReaction, deleteReaction } = require('../controllers/reactionsController');

router
    .route('/')
    .post(createReaction)

router
    .route('/:reactionId')
    .delete(deleteReaction)

module.exports = router;
