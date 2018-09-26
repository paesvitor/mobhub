import { combineReducers } from "redux";

import baseReducer from "../modules/base/BaseReducer";
import authReducer from "../modules/auth/AuthReducer";
import postReducer from "../modules/post/PostReducer";

const reducers = {
    base: baseReducer,
    auth: authReducer,
    postStore: postReducer
};

export default combineReducers(reducers);
