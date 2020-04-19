import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';


let postsData = [
  { id: 1, message: 'Hello world!', likeCount: 12 },
  { id: 2, message: 'Life is great!', likeCount: 43 },
  { id: 3, message: 'Props is done.', likeCount: 28 }
];

let dialogsData = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Oksana' },
  { id: 3, name: 'Ira' },
  { id: 4, name: 'Lena' },
  { id: 5, name: 'Vitya' }
];

let messagesData = [
  { id: 1, message: 'Hello, how is your day?' },
  { id: 2, message: 'Do you have any plans?' },
  { id: 3, message: 'What`s new?' },
  { id: 4, message: 'Life is great!' },
  { id: 5, message: 'I am happy!' }
];


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
