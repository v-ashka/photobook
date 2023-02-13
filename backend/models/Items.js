const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength:[50, 'name can not be more than 50 characters'],
    },
    img_uri: {
        type: String,
        required: [true, 'must provide a image uri'],
    },
    created_at: {
        type: Date,
        required: [true, 'must provied a date time'],
    },
    title: {
        type: String,
        required: false,
        maxlength:[50, 'title can not be more than 50 characters']
    },
    views: { type:Number, default: 0},
})

module.exports = mongoose.model('Items', ItemSchema)