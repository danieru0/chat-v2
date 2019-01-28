const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Chat = new Schema({
    chatName: String,
    admins: [{
        username: String,
    }],
    messages: [{
        username: String,
        message: String,
        time: {
            type: Date,
            default: Date.now
        }
    }]
})

module.exports = mongoose.model('Chat', Chat);