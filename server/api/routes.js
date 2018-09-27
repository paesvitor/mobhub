const express = require("express");
const router = express.Router();
const passport = require("passport");
const passportConfig = require("./passport");
const passportJWT = passport.authenticate("jwt", { session: false });
const passportLocal = passport.authenticate("local", { session: false });

// Controllers
const basicController = require("./controllers/basicController");
const postController = require("./controllers/postController");
const userController = require("./controllers/userController");
const whitelistController = require("./controllers/whitelistController");

router.route("/whitelist/create").post(whitelistController.create);
router.route("/posts/create").post(passportJWT, postController.create);
router.route("/posts").get(postController.getAll);
router.route("/users/signup").post(userController.signup);
router.route("/users/signin").post(passportLocal, userController.signin);

module.exports = router;
