import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const GET_USERS_BY_NAME = 'GET_USERS_BY_NAME';
export const getUsersByName = userData => ({
    type: GET_USERS_BY_NAME,
    userData
});

export const GET_USERS_BY_NAME_ERROR = 'GET_USERS_BY_NAME_ERROR';
export const getUsersByNameError = error => ({
    type: GET_USERS_BY_NAME_ERROR,
    error
});

export const GET_USERS_BY_LOCATION = 'GET_USERS_BY_LOCATION';
export const getUsersByLocation = userData => ({
    type: GET_USERS_BY_LOCATION,
    userData
});

export const GET_USERS_BY_LOCATION_ERROR = 'GET_USERS_BY_LOCATION_ERROR';
export const getUsersByLocationError = error => ({
    type: GET_USERS_BY_LOCATION_ERROR,
    error
});



export const searchUserByName = () => (dispatch, getState) => {
    alert("search name");
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${authToken}`
        },
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((userData) => dispatch(getUsersByName(userData)))
        .catch(err => {
            dispatch(getUsersByNameError(err));
        });
}























export const searchUserByLocation = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${authToken}`
        },
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((userDataLocations) => dispatch(getUsersByLocation(userDataLocations)))
        .catch(err => {
            dispatch(getUsersByLocationError(err));
        });
}




          