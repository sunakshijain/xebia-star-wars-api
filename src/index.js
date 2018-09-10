import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import mainReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'
let store = createStore(mainReducer, applyMiddleware(thunk, logger))
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
