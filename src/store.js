import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import bandDataReducer from './reducers/bandReducers';
import userDataReducer from './reducers/searchReducers';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        bandReducer: bandDataReducer,
        userReducer: userDataReducer

    }),
    applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;

