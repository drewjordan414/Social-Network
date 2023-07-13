const Thought = require('../models/Thought');
const ReactionSchema = require('../models/Reaction');

const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.status(200).json({
            status: 'success',
            results: thoughts.length,
            data: {
                thoughts,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        }); 
    }
};

const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                thought,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        }); 
    }
};

const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                thought,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        }); 
    }
};

const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!thought) {
            return res.status(404).json({
                status: 'fail',
                message: 'No thought found with that ID',
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                thought,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.id);
        if (!thought) {
            return res.status(404).json({
                status: 'fail',
                message: 'No thought found with that ID',
            });
        }
        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

module.exports = {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
};
