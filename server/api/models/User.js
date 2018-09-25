const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
