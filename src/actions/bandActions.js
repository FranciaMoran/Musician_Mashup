import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const CREATING_BAND = 'CREATING_BAND';
export const creatingBand = bandData => ({
    type: CREATING_BAND,
    bandData
});

export const CREATING_BAND_ERROR = 'CREATING_BAND_ERROR';
export const creatingBandError = error => ({
    type: CREATING_BAND_ERROR,
    error
});

export const SHOW_BAND_DATA_SUCCESS = 'SHOW_BAND_DATA_SUCCESS';
export const showBandDataSuccess = bandData => ({
    type: SHOW_BAND_DATA_SUCCESS,
    bandData
});

export const SHOW_BAND_DATA_ERROR = 'SHOW_BAND_DATA_ERROR';
export const showBandDataError = error => ({
    type: SHOW_BAND_DATA_ERROR,
    error
});


export const createBand = createBandInfo => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const userId = getState().auth.currentUser.id;
    createBandInfo.userId = userId 
    fetch(`${API_BASE_URL}/bands`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(createBandInfo)
    })
       .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((bandData) => dispatch(creatingBand(bandData)))
        .catch(err => {
            dispatch(creatingBandError(err));
        });
};

export const showBandData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/bands`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((bandData) => dispatch(showBandDataSuccess(bandData)))
        .catch(err => {
            dispatch(showBandDataError(err));
        });
};






/*
export const editMembers = profileInfo => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const userId = getState().auth.currentUser.id;
    alert("two");
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
            .catch(err => {
                const message =
                        'Does not work'
            })
    );
};


export const deleteBand = profileInfo => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const userId = getState().auth.currentUser.id;
    alert("two");
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
            .catch(err => {
                const message =
                        'Does not work'
            })
    );
};

export const deleteMember = profileInfo => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const userId = getState().auth.currentUser.id;
    alert("two");
    return (
        fetch(`${API_BASE_URL}/bands`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify(profileInfo)
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .catch(err => {
                const message =
                        'Does not work'
            })
    );
};
*/          