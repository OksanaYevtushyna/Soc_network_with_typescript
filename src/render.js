import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, sentMessage, enterNewPost, createMessage } from './state/state';



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} sentMessage={sentMessage} enterNewPost={enterNewPost} createMessage={createMessage} />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


export default rerenderEntireTree;