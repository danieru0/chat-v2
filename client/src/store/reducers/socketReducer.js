const initState = {
    chats: null,
    name: null,
    avatars: null
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'GET_CHATS_SUCCESS':
            return {
                ...state,
                chats: action.chats,
                name: action.name,
                avatars: action.avatars
            }
        default: return state;
    }
}