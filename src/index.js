import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './App/App';
import './index.css';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<MainApp />, document.getElementById('root'));



/* let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App store={store} />
                </Provider>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();

//store.subscribe(rerenderEntireTree); */



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
