const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const socket = require('socket.io');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/chat-v2', {useNewUrlParser: true});
mongoose.connection.on('error', (err) => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 8080, () => console.log('Server running'));
const io = socket(server);
const socketController = require('./controllers/socketController');

io.on('connection', (socket) => {

    socket.on('lol', socketController.something(socket));

});