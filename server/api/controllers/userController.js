const User = require("../models/User");
const JWT = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

signToken = user => {
    return JWT.sign(
        {
            iss: JWT_SECRET,
            sub: user._id,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 1)
        },
        "mobhub"
    );
};

module.exports = {
    signup: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            // User exists ? return 403 : continue
            const exists = await User.findOne({ email });

            if (exists) {
                return res
                    .status(403)
                    .json({ error: "Email is already in use" });
            }

            // Create user && continue
            const user = new User({ email, password });
            const data = await user.save();

            // Generate user token
            const auth_token = signToken(user);

            res.status(200).json({ auth_token });
        } catch (error) {
            res.status(500).json(error);
        }
    },

    signin: async (req, res, next) => {
        console.log(req.user);
        const auth_token = signToken(req.user);
        res.status(200).json({ auth_token });
    }
};
