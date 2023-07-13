const mongoose = require('mongoose');
const { Timestamp } = require('bson');
const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

// const reactionSchema = model('Reaction', ReactionSchema);

module.exports = ReactionSchema;
