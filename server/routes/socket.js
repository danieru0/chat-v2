const Chat = require('../models/chat');
const User = require('../models/user');

module.exports = {
    createNewChat: function (socket, activeUsers) {
        return function (data) {
            let activeClient = socket.username;
            let clickedClient = data;

            const chat = new Chat();
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
            Chat.find({ "admins.username": socket.username }, function(err, chat) {
                if (err) {
                    console.log(err);
                } else {
                    let chatUsernames = [];
                    let usernamesAvatars = [];
                    chat.map(item => {
                        item.admins.map(item => {
                            if (item.username !== socket.username) {
                                chatUsernames.push(item.username);
                            }
                        });
                    });
                    chatUsernames.map(item => {
                        User.find(
                            { "username" : { "$regex": item, "$options": "i" } }
                        ).select('-password').exec(function(err, profile) {
                            if (err) {
                                console.log(err);
                            } else {
                                profile.map(item => {
                                    usernamesAvatars.push(item.avatar);
                                });
                                socket.emit('getUserChatsResult', chat, socket.username, usernamesAvatars)
                            }
                        });
                    });
                }
            });
        }
    }
}