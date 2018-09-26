import { SET_POSTS_TO_STORE } from "./PostConstants";

const initialState = {
    posts: [],
    hasLoadedPosts: false
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS_TO_STORE:
            return {
                ...state,
                posts: action.posts,
                hasLoadedPosts: true
            };
        default:
            return state;
    }
};

export default AuthReducer;
