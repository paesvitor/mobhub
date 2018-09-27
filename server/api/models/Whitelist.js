const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const whitelistSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
});

const Whitelist = mongoose.model("Whitelist", whitelistSchema);

module.exports = Whitelist;
