const initState = {
    token: false,
    authError: 'XD',
    tokenLoading: true
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'TOKEN_BEGIN':
            return {
                ...state,
                tokenLoading: true
            }
        case 'TOKEN_GOOD':
            return {
                ...state,
                tokenLoading: false,
                token: true
            }
        case 'TOKEN_BAD':
            return {
                ...state,
                tokenLoading: false,
                token: false
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: true
            }
        default: return state;
    }
}