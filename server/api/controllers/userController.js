const User = require("../models/User");
const Whitelist = require("../models/Whitelist");
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
            const { email, password, displayName } = req.body;

            const whitelisted = await Whitelist.findOne({ email });

            if (!whitelisted) {
                return res.status(403).json({
                    error:
                        "This email is not whitelisted. Contact system admin."
                });
            }

            // User exists ? return 403 : continue
            const exists = await User.findOne({ email });

            if (exists) {
                return res
                    .status(403)
                    .json({ error: "Email is already in use" });
            }

            // Create user && continue
            const user = new User({ email, password, displayName });
            const data = await user.save();

            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    signin: async (req, res, next) => {
        try {
            const access_token = await signToken(req.user);
            res.status(200).json({ access_token });
        } catch (error) {
            rest.status(500).json(error);
        }
    }
};
