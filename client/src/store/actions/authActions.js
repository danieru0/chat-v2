import axios from 'axios';

export const checkToken = () => {
    return dispatch => {
        dispatch({
            type: 'TOKEN_BEGIN'
        });
        axios.get('/api/checkToken').then(() => {
            dispatch({
                type: 'TOKEN_GOOD'
            });
        }).catch(() => {
            dispatch({
                type: 'TOKEN_BAD'
            });
        })
    }
}

export const login = (credentials) => {
    return dispatch => {
        axios.post('/api/login', {
            username: credentials.username,
            password: credentials.password
        }).then(() => {
            dispatch({
                type: 'LOGIN_SUCCESS',
            });
        }).catch(err => {
            console.log(err);
        })
    }
} 