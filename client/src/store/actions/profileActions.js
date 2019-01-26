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

export const getSearchProfiles = search => {
    return dispatch => {
        axios.get('/api/profiles?nick='+search).then(resp => {
            dispatch({
                type: 'PROFILE_GET_SUCCESS',
                data: resp
            })
        }).catch(err => {
            console.log(err);
        })
    }
}