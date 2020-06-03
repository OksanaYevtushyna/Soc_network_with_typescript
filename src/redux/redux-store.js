import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";
import { navbarReducer } from "./navbarReducer";
import usersReducer from './usersReducer';


let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogReducer,
    navbarReducer: navbarReducer,
    userReducer: usersReducer
});

let store = createStore(reducers);

window.store = store

export default store;