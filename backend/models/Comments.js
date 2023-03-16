const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    author_id: {
        type: mongoose.ObjectId,
        required: true,
    },
    item_id: {
        type: mongoose.ObjectId,
        required: true
    },
    created_at: {
        type: Date,
        default: Date(),
    },
    content: {
        type: String,
        required: true,
        maxlength: [150, 'Comment content cannot be longer than 150 characters'],
    },
    likes: { type: Number, default: 0 },
    group: {
        type: String,
        default: null,
    }
})

module.exports = mongoose.model('Comments', UserSchema)