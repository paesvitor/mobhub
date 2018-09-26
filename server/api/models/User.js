const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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
