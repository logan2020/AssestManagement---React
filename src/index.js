import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import rootReducer from "../src/redux/reducers/reducer";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

const store = createStore(rootReducer, applyMiddleware(logger,thunk));
window.store= store;
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
