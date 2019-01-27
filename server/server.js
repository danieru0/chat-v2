const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const socket = require('socket.io');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

require('./routes/profiles')(app);
require('./routes/auth')(app);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/chat-v2', {useNewUrlParser: true});
mongoose.connection.on('error', (err) => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

const server = app.listen(process.env.PORT || 8080, () => console.log('Server running'));
const io = socket(server);
const socketRoute = require('./routes/socket');

const jwt = require('jsonwebtoken');
const secret = require('./config/secret');

let activeUsers = [];

io.use(function(socket, next) {
    if (socket.request.headers.cookie) {
        let cookies = socket.request.headers.cookie;
        let tokenFromCookies = cookies.substring(cookies.indexOf('token'));
        let token = tokenFromCookies.split('=')[1].split(';')[0];
        if (token) {
            jwt.verify(token, secret, function(err, decoded) {
                if (!err) {
                    socket.username = decoded.username;
                    next();
                }
            });
        }
    }
})
.on('connection', (socket) => {

    activeUsers.push({
        [socket.username]: socket.id
    });

    socket.on('createNewChat', socketRoute.createNewChat(socket, activeUsers));

    socket.on('getUserChats', socketRoute.getUserChats(socket));

    socket.on('disconnect', () => {
        let i = activeUsers.indexOf(socket);
        activeUsers.splice(i, 1);
    });

});