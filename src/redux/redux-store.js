import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";
import { navbarReducer } from "./navbarReducer";
import usersReducer from './usersReducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({ profileReducer, dialogReducer, navbarReducer, usersReducer, authReducer });

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;