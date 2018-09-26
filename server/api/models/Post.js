const mongoose = require("mongoose");
const uuidv1 = require("uuid/v1");

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const postSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    createdAt: { type: Date, default: Date.now },
    lastEdit: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
    creator: { type: String, default: "not yet assigned" },
    title: { type: String, required: true },
    text: { type: String, required: true },
    slug: { type: String, default: uuidv1() },
    thumbnail: { type: String, default: "empty" },
    category: { type: String, default: "uncategorized" }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
