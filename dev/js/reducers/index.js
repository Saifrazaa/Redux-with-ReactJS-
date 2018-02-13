import React from "react";
import {combineReducers} from "redux";
import UserReducer from "./user-reducers";
import ActiveUser from "./active-user";

const allReducer =combineReducers({
    users:UserReducer,
    active:ActiveUser
});
export default allReducer;