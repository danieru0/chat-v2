const initState = {
    profilesData: null,
    profileUpdateSuccess: false
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'PROFILE_GET_SUCCESS':
            return {
                profilesData: action.data
            }
        case 'PROFILE_UPDATE_SUCCESS':
            return {
                profileUpdateSuccess: true
            }
        default: return state;
    }
}