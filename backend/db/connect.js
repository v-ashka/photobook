const mongoose = require('mongoose');

const connectDB = async (url) => {
    mongoose.set("strictQuery", false);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Database ERORR: Connection error!"));
    db.once("open", function () {
        console.log("Connected to database: " + db.name)
    })
    return mongoose.connect(url);
    
}

module.exports = connectDB;