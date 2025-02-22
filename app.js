const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const env = require('dotenv').config();

const indexRouter = require('./Routes/index.routes');

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({"ping": "pong"});
});

app.use('/api', indexRouter);

const connect_db = () =>{
    username= process.env.DB_USERNAME
    password= process.env.DB_PASSWORD
    return mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ddjgu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.log('Error connecting to the database', err);
    });
}

const start_server = () => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

connect_db().then(start_server);

