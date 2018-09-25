import Post from "./PostModel";
import { postsRef } from "modules/firebase";

export const createPost = async data => {
    const post = new Post(data);

    try {
        return await postsRef.child(`${post.slug}`).set(post);
    } catch (error) {
        console.log(error);
    }
};
