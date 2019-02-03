export const getUserChats = socket => {
    return dispatch => {
        socket.emit('getUserChats');
        socket.on('getUserChatsResult', (chats, name, avatars) => {
            dispatch({
                type: 'GET_CHATS_SUCCESS',
                chats: chats,
                name: name,
                avatars: avatars
            });
        });
    }
}

export const sendChatMessage = (socket, user, message) => {
    return dispatch => {
        socket.emit('sendChatMessage', user, message);
    }
}

export const clearUserChats = () => {
    return dispatch => {
        dispatch({
            type: 'CLEAR_CHATS'
        })
    }
}