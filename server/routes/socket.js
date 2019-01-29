const Chat = require('../models/chat');
const User = require('../models/user');

module.exports = {
    createNewChat: function (socket, activeUsers) {
        return function (data) {
            let activeClient = socket.username;
            let clickedClient = data;

            const chat = new Chat({ chatName: `${activeClient}/${clickedClient}` });
            chat.admins.push({
                username: activeClient,
            });
            chat.admins.push({
                username: clickedClient
            });
            chat.save(err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('saved');
                }
            })
        }
    },

    getUserChats: function (socket) {
        return function (data) {
            Chat.find({ "admins.username": socket.username }, function(err, chats) {
                if (err) {
                    console.log(err);
                } else {
                    let chatUsernames = [];
                    let usernamesAvatars = [];
                    chats.map(item => {
                        item.admins.map(item => {
                            if (item.username !== socket.username) {
                                chatUsernames.push(item.username);
                            }
                        });
                    });
                    chatUsernames.map(item => {
                        User.find(
                            { "username" : { "$regex": item, "$options": "i" } }
                        ).select('-password').exec((err, profile) => {
                            if (err) {
                                console.log(err);
                            } else {
                                profile.map(item => {
                                    usernamesAvatars.push({
                                        [item.username]: item.avatar 
                                    });
                                });
                                socket.emit('getUserChatsResult', chats, socket.username, usernamesAvatars)
                            }
                        });
                    });
                }
            });
        }
    },

    sendChatMessage: function (socket, io, activeUsers) {
        return function (user, message) {
            activeUsers.map(item => {
                if (Object.keys(item).toString() === user) {
                    let socketId = Object.keys(item).map(value => item[value]);
                    io.to(socketId).emit('receiveChatMessage', message, socket.username);
                    socket.emit('receiveChatMessage', message, socket.username);
                }
            })

            Chat.updateOne(
                { "admins.username": { $all: [user, socket.username] } },
                {
                    "$push": {
                        messages: {
                            username: socket.username,
                            message: message
                        }
                    }
                }
            ).then(data => {
                console.log(data);
            })
        }
    }
}