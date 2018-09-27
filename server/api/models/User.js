const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const uuid = require("uuid/v1");
const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
    createdAt: {
        type: String,
        default: Date.now()
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    displayName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
});

userSchema.pre("save", async function(next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.isValidPassword = async function(password) {
    try {
        const valid = await bcrypt.compare(password, this.password);
        return valid;
    } catch (error) {
        throw new Error(error);
    }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
