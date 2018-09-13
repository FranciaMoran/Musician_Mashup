 import {
    GET_USERS_BY_NAME,
    GET_USERS_BY_NAME_ERROR,
    GET_USERS_BY_LOCATION,
    GET_USERS_BY_LOCATION_ERROR  
} from '../actions/searchActions';

const initialState = {
    userData: null,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === GET_USERS_BY_NAME) {
        return Object.assign({}, state, {
            userData: action.userData,
            error: null
        });
    } else if (action.type === GET_USERS_BY_NAME_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === GET_USERS_BY_LOCATION) {
        return Object.assign({}, state, {
            userData: action.userData,
            error: null
        });

    } else if (action.type === GET_USERS_BY_LOCATION_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } 
    return state;
}
