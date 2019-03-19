import axios from 'axios';

export const getAllProfiles = () => {
    return dispatch => {
        axios.get('/api/profiles').then(resp => {
            dispatch({
                type: 'PROFILE_GET_SUCCESS',
                data: resp
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export const getSearchProfiles = (search, specific) => {
    return dispatch => {
        axios.get('/api/profiles?nick='+search+'&specific='+specific).then(resp => {
            dispatch({
                type: 'PROFILE_GET_SUCCESS',
                data: resp
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export const updateProfile = (localization, description, avatar) => {
    return dispatch => {
        if (avatar) {
            axios.post('/api/profiles/updateProfile', avatar, {
            }).then(() => {
                axios.post('/api/profiles/updatePRofile', {
                    localization: localization,
                    description: description
                }).then(() => {
                    dispatch({
                        type: 'PROFILE_UPDATE_SUCCESS'
                    })
                });
            }).catch(err => {
                console.log(err);
            })
        } else {
            axios.post('/api/profiles/updateProfile', {
                localization: localization,
                description: description
            }).then(resp => {
                dispatch({
                    type: 'PROFILE_UPDATE_SUCCESS'
                })
            }).catch(err => {
                console.log(err);
            });
        }
    }
}