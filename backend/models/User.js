const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: false,
        maxlength: [20, 'Fristname can not be more than 20 characters'],
        default: ''
    },
    lastname: {
        type: String,
        required: false,
        maxlength: [20, 'Lastname can not be more than 20 characters'],
        default: ''
    },
    email: {
        type: String,
        required: [true, 'You must specify email address']
    },
    password: {
        type: String,
        required: [true, 'You must specify password']
    },
    created_at: {
        type: Date,
        default: Date(),
    },
    group: {
        type: String,
        default: null,
    }
})

module.exports = mongoose.model('User', UserSchema)