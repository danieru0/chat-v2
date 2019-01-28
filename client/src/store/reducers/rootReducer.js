import authReducer from './authReducer';
import profileReducer from './profileReducer';
import socketReducer from './socketReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    auth: authReducer,
    profiles: profileReducer,
    socket: socketReducer
})