import firebase from "firebase";
import "firebase/auth";

let user;

firebase.auth().onAuthStateChanged(function(currentUser) {
    if (currentUser) {
        user = currentUser;
    } else {
        user = firebase.auth().currentUser;
    }
});

const uuidv1 = require("uuid/v1");

const placeholderThumbnail =
    "https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png";

class Post {
    constructor(post) {
        this.isDeleted = false;
        this.createdAt = Date.now();
        this.lastEdit = Date.now();
        this.createdBy = user.displayName;
        this.published = true;

        // Parameters properties
        this.title = post.title || "No title";
        this.slug = post.slug || uuidv1();
        this.content = post.content || "";
        this.thumbnail = post.thumbnail || placeholderThumbnail;
        this.category = post.category || "No Category";
    }
}

export default Post;
