const User = require("../models/User");

module.exports = {
    signup: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            // Check if user exists
            const exists = await User.findOne({ email });

            if (exists) {
                return res
                    .status(403)
                    .json({ error: "Email is already in use" });
            }

            // If not, create user
            const user = new User({ email, password });
            const data = await user.save();

            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};
