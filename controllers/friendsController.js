const User = require('../models/User');

exports.addFriend = async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    try {
        user.friends.push(req.body.friendId);
        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ... Add more methods for delete
