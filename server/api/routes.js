const express = require("express");
const router = express.Router();
const passport = require("passport");
const passportConfig = require("./passport");
const { validateBody, schemas } = require("./helpers/routeHelpers");
const passportJWT = passport.authenticate("jwt", { session: false });
const passportLocal = passport.authenticate("local", { session: false });

// Controllers
const basicController = require("./controllers/basicController");
const postController = require("./controllers/postController");
const userController = require("./controllers/userController");

router.route("/posts/create").post(passportJWT, postController.create);
router.route("/posts").get(postController.getAll);

router
    .route("/users/signup")
    .post(validateBody(schemas.authSchema), userController.signup);

router
    .route("/users/signin")
    .post(
        validateBody(schemas.authSchema),
        passportLocal,
        userController.signin
    );

module.exports = router;
