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


module.exports = {
    createReaction: this.createReaction,
    deleteReaction: this.deleteReaction,
};