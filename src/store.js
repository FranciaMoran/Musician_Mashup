import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import bandDataReducer from './reducers/bandReducers';
import userDataReducer from './reducers/searchReducers';
import {setAuthToken, refreshAuthToken, storeAuthInfo, authSuccess} from './actions/auth';
import jwtDecode from 'jwt-decode';

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
   // console.log("gotauthtoken");
   // console.log(authToken);
    const token = authToken;
    const decodedToken = jwtDecode(token);
   // console.log(decodedToken);
    store.dispatch(setAuthToken(token));
    store.dispatch(authSuccess(decodedToken.user));
    //store.dispatch(setAuthToken(token));
    //store.dispatch(storeAuthInfo(token));
    //store.dispatch(refreshAuthToken());
}

export default store;

