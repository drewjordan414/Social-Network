const router = require('express').Router();
const { getAllThoughts, createThought, getThoughtById, updateThought, deleteThought } = require('../controllers/thoughtsController');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

module.exports = router;
