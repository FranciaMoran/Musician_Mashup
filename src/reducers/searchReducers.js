 import {
    GET_USER_BY_NAME,
    GET_USER_BY_NAME_ERROR,
    GET_USER_BY_LOCATION,
    GET_USER_BY_LOCATION_ERROR  
} from '../actions/searchActions';

const initialState = {
    userData: null,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === GET_USER_BY_NAME) {
        console.log(action.userData)
        return Object.assign({}, state, {
            userData: action.userData,
            error: null
        });
    } else if (action.type === GET_USER_BY_NAME_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }  
    return state;
}
