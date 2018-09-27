const Whitelist = require("../models/Whitelist");

module.exports = {
    create: async (req, res, next) => {
        try {
            const { email } = req.body;
            console.log("whitelist");
            console.log(email);
            // User exists ? return 403 : continue
            const exists = await Whitelist.findOne({ email });

            console.log(exists);

            if (exists) {
                return res
                    .status(403)
                    .json({ error: "This Email is already whitelisted" });
            }

            // Create user && continue
            const whitelist = new Whitelist({ email });

            console.log(whitelist);
            const data = await whitelist.save();

            console.log(data);

            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};
