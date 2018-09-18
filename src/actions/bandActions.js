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

export const DELETING_A_BAND = 'DELETING_A_BAND';
export const deletingABand = id => ({
    type: DELETING_A_BAND,
    id
});

export const DELETING_A_BAND_ERROR = 'DELETING_A_BAND_ERROR';
export const deletingABandError = error => ({
    type: DELETING_A_BAND_ERROR,
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
       .then(res => {
        window.location.reload();
       })
       .then((bandData) => dispatch(creatingBand(bandData)))
       .catch(err => {
            dispatch(creatingBandError(err));
        });
};

export const showCreatedBand = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    //const userId = getState().auth.currentUser.id;
    return fetch(`${API_BASE_URL}/bands`, {
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

export const deleteBand = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    //const bandId = getState().bandReducer.bandData.id
    console.log(getState().bandReducer.bandData);
    alert("deleting");
    return( 
        fetch(`${API_BASE_URL}/bands/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Bearer ${authToken}`
            },
        })
           .then(res => normalizeResponseErrors(res))
       .then(res => res.json())
       .then(() => dispatch(deletingABand(id)))
       .catch(err => {
            dispatch(deletingABandError(err));
        })
    );
};



