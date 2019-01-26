const initState = {
    token: false,
    tokenLoading: true,
    loginError: 'XD',
    registerSuccess: false,
    registerError: 'FF'
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
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                registerSuccess: true
            }
        default: return state;
    }
}