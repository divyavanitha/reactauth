import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';
import setAuthToken from './utils/set_auth_token';
import {SET_CURRENT_USER} from './actions/types';
import store from './store';

import 'popper.js/dist/popper.js';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

if(localStorage.token){
    setAuthToken(localStorage.token);
    const decode = jwt_decode(localStorage.token);
    store.dispatch({
        type:SET_CURRENT_USER,
        payload:decode
      })
}

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
