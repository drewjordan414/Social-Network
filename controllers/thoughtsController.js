const Thought = require('../models/Thought');

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
