const Post = require("../models/Post");
const mongoose = require("mongoose");

const postController = {};

postController.create = (req, res) => {
    const { title, text, creator } = req.body;

    const _post = new Post({
        _id: new mongoose.Types.ObjectId(),
        title,
        text,
        creator
    });

    _post
        .save()
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error));
};

postController.getAll = (req, res) => {
    Post.find({})
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(500).json(error));
};

postController.get = (req, res) => {
    const { id } = req.params;
    console.log(id);
    Post.find({ _id: id })
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
