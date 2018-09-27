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
    category: { type: String, default: "uncategorized" },
    creator: { type: String, default: "no creator assigned" },
    thumbnail: {
        type: String,
        default:
            "https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/f24b4a7bf9f24d1ba5f899339e6949f3"
    },
    title: { type: String, required: true },
    text: { type: String, required: true },
    slug: { type: String, default: uuidv1() }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
