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