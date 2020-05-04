import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import { addPost, sentMessage, enterNewPost, createMessage, subscribe } from './state/state';
import { BrowserRouter } from 'react-router-dom';
import store from './state/state';



let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                    /*addPost={store.addPost.bind(store)}
                    enterNewPost={store.enterNewPost.bind(store)}
                    sentMessage={store.sentMessage.bind(store)}
                    createMessage={store.createMessage.bind(store)}*/ />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();

store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
