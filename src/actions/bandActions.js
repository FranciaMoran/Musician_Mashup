import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const CREATING_BAND = 'CREATING_BAND';
export const creatingBand = bandData => ({
    type: CREATING_BAND,
    bandData
});

export const GET_CREATED_BAND = 'GET_CREATED_BAND';
export const getCreatedBand = bandData => ({
    type: GET_CREATED_BAND,
    bandData
});

export const CREATING_BAND_ERROR = 'CREATING_BAND_ERROR';
export const creatingBandError = error => ({
    type: CREATING_BAND_ERROR,
    error
});

export const GET_CREATED_BAND_ERROR = 'GET_CREATED_BAND_ERROR';
export const getCreatedBandError = error => ({
    type: GET_CREATED_BAND_ERROR,
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

export const showCreatedBand = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/bands/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${authToken}`
        },
    })
       .then(res => normalizeResponseErrors(res))
       .then(res => res.json())
       .then((bandData) => dispatch(getCreatedBand(bandData)))
       .catch(err => {
            dispatch(getCreatedBandError(err));
        });
};

export const deleteBand = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    alert("deleting");
    return (
        fetch(`${API_BASE_URL}/bands`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Bearer ${authToken}`
            },
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .catch(err => {
                const message =
                        'Does not work'
            })
    );
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
/*

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