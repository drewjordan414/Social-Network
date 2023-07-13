const router = require('express').Router({ mergeParams: true });
const { addFriend, removeFriend } = require('../controllers/friendsController');

router
    .route('/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;
