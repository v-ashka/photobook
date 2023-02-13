const mongoose = require('mongoose');

const connectDB = async (url) => {
    mongoose.set("strictQuery", false);
    return mongoose.connect(url);
}

module.exports = connectDB;