import { SET_USER_TO_STORE, CLEAR_USER_FROM_STORE } from "./AuthConstants";

// Mocks
import auth from "./__mocks/auth.json";

const env = process.env.NODE_ENV;

const initialState = {
    auth: null
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_TO_STORE:
            return {
                ...state,
                auth: action.auth
            };
        case CLEAR_USER_FROM_STORE:
            return {
                ...state,
                auth: null
            };
        default:
            return state;
    }
};

export default AuthReducer;
