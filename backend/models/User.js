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
    nickname: {
        type: String,
        required: false,
        maxlength: [20, 'Nickname can not be more than 20 characters']
    },
    email: {
        type: String,
        required: [true, 'You must specify email address']
    },
    password: {
        type: String,
        required: [true, 'You must specify password']
    },
    user_avatar: {
        type: String,
        required: false,
        default: ''
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