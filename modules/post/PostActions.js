import Post from "./PostModel";
import { postsRef } from "../firebase";

export const createPost = async data => {
    const post = new Post(data);
    try {
        return await postsRef.child(`${post.slug}`).set(post);
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = async id => {
    try {
        return await postsRef.child(`${id}`).remove();
    } catch (error) {
        console.error(error);
    }
};
