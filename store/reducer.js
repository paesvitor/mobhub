import { combineReducers } from "redux";

import baseReducer from "../modules/base/BaseReducer";

const reducers = {
    base: baseReducer
};

export default combineReducers(reducers);
