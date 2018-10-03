import { SET_POSTS_TO_STORE } from "./PostConstants";
import axios from "config/axios";

export const createPost = async data => {
    try {
        const response = await axios.post("/posts/create", { ...data });
        return response;
    } catch (error) {
        return error;
    }
};

export const getAllPosts = () => async dispatch => {
    try {
        const response = await axios.get("/posts");
        const posts = response.data;
        dispatch({
            type: SET_POSTS_TO_STORE,
            posts
        });
    } catch (error) {
        return error;
    }
};

export const getPost = async slug => {
    try {
        const response = await axios.get(`/posts/get/${slug}`);

        console.log(response);
        const post = response.data;
        return post;
    } catch (error) {
        throw new Error(error);
    }
};

export const deletePost = async id => {
    try {
        return await postsRef.child(`${id}`).remove();
    } catch (error) {
        console.error(error);
    }
};
