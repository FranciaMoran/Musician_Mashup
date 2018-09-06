 import {
    FETCH_BANDS_SUCCESS,
    FETCH_BANDS_ERROR,
    CREATE_BAND
} from '../actions/bandActions';

const initialState = {
    bandData: null,
    error: null
};

export default function reducer(state = initialState, action) {
    console.log("reducer hit")
    if (action.type === FETCH_BANDS_SUCCESS) {
        return Object.assign({}, state, {
            bandData: action.bandData,
            error: null
        });
    } else if (action.type === FETCH_BANDS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
     else if (action.type === CREATE_BAND) {
        console.log(action.bandData)
        return Object.assign({}, state, {
            bandData: action.bandData,
            error: null
        });
    }
    return state;
}
