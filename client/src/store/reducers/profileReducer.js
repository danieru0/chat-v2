const initState = {
    profilesData: null
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'PROFILE_GET_SUCCESS':
            return {
                profilesData: action.data
            }
        default: return state;
    }
}