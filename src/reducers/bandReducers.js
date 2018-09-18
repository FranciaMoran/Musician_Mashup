 import {
    CREATING_BAND,
    CREATING_BAND_ERROR,
    GET_CREATED_BAND,
    GET_CREATED_BAND_ERROR,
    DELETING_A_BAND
} from '../actions/bandActions';

const initialState = {
    bandData: null,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === CREATING_BAND) {
        console.log(action.bandData)
        return Object.assign({}, state, {
            bandData: action.bandData,
            error: null
        });
    } else if (action.type === GET_CREATED_BAND) {
        //console.log(action.bandData)
        return Object.assign({}, state, {
            bandData: action.bandData,
            error: null
        });
    }  else if (action.type === CREATING_BAND_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }  else if (action.type === GET_CREATED_BAND_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }  else if (action.type === DELETING_A_BAND) {
        return Object.assign({}, state, {
            bandData: state.bandData.filter(band => band._id != action.id)
        });
    } 
    return state;
}
