// Import Actions
import { SET_BASE_DATA_TO_STORE } from "./BaseActions";

// Initial State
const initialState = {
    theme: {
        primaryColor: "red"
    }
};

// Reducer
const BaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BASE_DATA_TO_STORE:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};

export default BaseReducer;
