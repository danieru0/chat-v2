const initState = {
    profilesData: null,
    profileUpdateSuccess: false
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'PROFILE_GET_SUCCESS':
            return {
                ...state,
                profilesData: action.data
            }
        case 'PROFILE_UPDATE_SUCCESS':
            return {
                ...state,
                profileUpdateSuccess: true
            }
        default: return state;
    }
}