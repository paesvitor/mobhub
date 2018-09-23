import { combineReducers } from "redux";

import baseReducer from "../modules/base/BaseReducer";
import authReducer from "../modules/auth/AuthReducer";

const reducers = {
    base: baseReducer,
    auth: authReducer
};

export default combineReducers(reducers);
