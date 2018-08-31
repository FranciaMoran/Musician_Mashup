import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});
/*
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const fetchDataSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    data
});

export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const fetchDataError = error => ({
    type: FETCH_DATA_ERROR,
    error
}); */

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/protected`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};


export const editProfile = profileInfo => (dispatch, getState) => {
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
export const createBand = createBandInfo => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    alert("three");
    return (
        fetch(`${API_BASE_URL}/bands`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createBandInfo)
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .catch(err => {
                const message =
                        'Does not work'
            })
    );
};

  

export const fetchData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/profiles`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchDataSuccess(data)))
        .catch(err => {
            dispatch(fetchDataError(err));
        });
};
*/

          