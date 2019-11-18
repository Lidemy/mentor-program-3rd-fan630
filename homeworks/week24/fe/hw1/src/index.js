import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger'
import reducer from './reducer'

const reducers = combineReducers({
    nav: reducer
})
// const store = createStore(reducers, applyMiddleware(thunk))

const store = createStore(reducers, applyMiddleware(logger, promiseMiddleware))
// action => funA => funcA(dispatch)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
