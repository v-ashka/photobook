
const express = require("express");
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser');
const routeItems = require('./routes/items');
const routeUser = require('./routes/user');
const routerFile = require('./routes/files');


const connectDB = require('./db/connect');
const notFound = require("./middleware/not-found");
const errorHandlerMiddleWare = require("./middleware/error-handler");
require('dotenv').config();

// middleware

app.use(express.json());
app.use(cookieParser());

// routes

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html")); 
});

app.use('/api/v1/items', routeItems);
app.use('/api/v1/user', routeUser);
app.use('/api/v1/file', routerFile);

app.use(notFound);
app.use(errorHandlerMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listeing on port ${port}`));
    } catch (error) {
        console.log(error)
    }
}

start();


