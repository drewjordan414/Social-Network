const router = require('express').Router();
const { getAllUsers, getUserById, createUser, deleteUser} = require('../controllers/usersController');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;
