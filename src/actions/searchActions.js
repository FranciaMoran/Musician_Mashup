import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';



export const searchUsers = searchByName => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return (
        fetch(`${API_BASE_URL}/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify(searchByName)
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
    )
}

          