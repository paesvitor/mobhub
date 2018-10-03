const Post = require("../models/Post");
const mongoose = require("mongoose");

const postController = {};

postController.create = (req, res) => {
    const { title, text, creator, thumbnail, slug, category } = req.body;

    const post = new Post({
        _id: new mongoose.Types.ObjectId(),
        thumbnail,
        slug,
        title,
        text,
        creator,
        category
    });

    post.save()
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error));
};

postController.getAll = (req, res) => {
    Post.find({})
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(500).json(error));
};

postController.get = (req, res) => {
    const { slug } = req.params;
    Post.findOne({ slug })
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error));
};

postController.remove = (req, res) => {
    const { id } = req.params;
    Post.remove({ _id: id })
        .exec()
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error));
};

module.exports = postController;
