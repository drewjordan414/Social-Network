const Thought = require('../models/Thought');

exports.createReaction = async (req, res) => {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
    }

    try {
        thought.reactions.push(req.body);
        const updatedThought = await thought.save();
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteReaction = async (req, res) => {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
    }

    try {
        thought.reactions.pull(req.params.reactionId);
        const updatedThought = await thought.save();
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAllThoughts = async (req, res) => {
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

exports.getThoughtById = async (req, res) => {
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