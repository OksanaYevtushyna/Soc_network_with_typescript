import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";
import { navbarReducer } from "./navbarReducer";
import usersReducer from './usersReducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';


let reducers = combineReducers({
    profileReducer, dialogReducer, navbarReducer, usersReducer, authReducer, appReducer, form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;