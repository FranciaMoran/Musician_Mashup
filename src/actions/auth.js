import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import creatingBand from './bandActions'

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const editProfileSuccess = data => ({
    type: EDIT_PROFILE_SUCCESS,
    data
});

export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const updateUserSuccess = currentUser => ({
    type: UPDATE_USER_SUCCESS,
    currentUser
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

export const storeAuthInfo = (res, dispatch) => {
   // console.log(res);
    const decodedToken = jwtDecode(res.authToken);
    console.log(decodedToken);
    dispatch(setAuthToken(res.authToken));
   // dispatch(setAuthToken(res.authToken));
    dispatch(authSuccess(res.user));
   //dispatch(creatingBand(res.user.name));
    saveAuthToken(res.authToken);
};


export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            dispatch(authError(err));
            dispatch(clearAuth());
            clearAuthToken(authToken);
        });
};

export const login = (username, password) => dispatch => {
    dispatch(authRequest());
    return (
        fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(res => storeAuthInfo(res, dispatch))
            .catch(err => {
                const {code} = err;
                const message =
                    code === 401
                        ? 'Incorrect username or password'
                        : 'Unable to login, please try again';
                dispatch(authError(err));
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
    );
};

export const editProfile = profileInfo => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const userId = getState().auth.currentUser.id;
    return (
        fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify(profileInfo)
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(data => dispatch(editProfileSuccess(data)))
            .catch(err => {
                const message =
                        'Does not work'
            })
            )
};
/*
export const showEditedProfile = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const userId = getState().auth.currentUser.id;
    return fetch(`${API_BASE_URL}/users${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${authToken}`
        },
    })
       .then(res => normalizeResponseErrors(res))
       .then(res => res.json())
       .then((currentUser) => dispatch(authSuccess(currentUser)))
       .catch(err => {
            dispatch(authError(err));
        });
}; */


