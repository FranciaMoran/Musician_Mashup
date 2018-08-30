import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const registerUser = user => dispatch => {
    alert("hello there");
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const editProfile = profileInfo => dispatch => {
    return (
        fetch(`${API_BASE_URL}/profiles`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profileInfo)
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .catch(err => {
                alert("hello");
                const message =
                        'Does not work'
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
    );
};


  