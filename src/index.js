import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import * as axios from "axios";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from "../src/redux/reducers/reducer";
import redirectReducer from "./redux/reducers/redirect";

// axios defaults starts here
axios.defaults.baseURL = "http://localhost:9090";
axios.interceptors.request.use(function(config) {
    let jwt = localStorage.getItem('jwt');
    if ( jwt != null ) {
      config.headers["x-access-token"] = jwt;
    }
  
    return config;
  }, function(err) {
    return Promise.reject(err);
  });
// axios defaults ends here

const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log("[middleware] despatching action", action)
            const result=next(action);
            console.log("[middleware next state]",store.getState());
            return result;
        }
    }
}

const root=combineReducers({
    root: rootReducer,
    redirect: redirectReducer
});

const store = createStore(root, applyMiddleware(logger,thunk));
window.store= store;
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
