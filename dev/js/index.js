import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import allReducer from "./reducers";
import App from "./components/app";
import {Provider} from "react-redux";
const store=createStore(allReducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    < /Provider>
    ,
document.getElementById('root')
);
