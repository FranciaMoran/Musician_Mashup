import {API_BASE_URL} from '../config';

export const CHANGING_PROFILE = 'CHANGING_PROFILE';
export const changingProfile = () => ({
    type: CHANGING_PROFILE
});

export const editProfile = (name, location, genre, cell, email) => dispatch => {
    dispatch(changingProfile());
    return (
        fetch(`${API_BASE_URL}/dashboard`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                location,
                genre,
                cell,
                email
            })
        })
            .then(res => res.json())
            
    );
};