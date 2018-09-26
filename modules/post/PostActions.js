import axios from "config/axios";

export const createPost = async data => {
    try {
        const response = await axios.post("/posts/create", { ...data });
        return response;
    } catch (error) {
        return error;
    }
};

export const deletePost = async id => {
    try {
        return await postsRef.child(`${id}`).remove();
    } catch (error) {
        console.error(error);
    }
};
