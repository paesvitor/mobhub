const express = require("express");
const router = express.Router();
const passport = require("passport");
const passportConfig = require("./passport");

// Controllers
const basicController = require("./controllers/basicController");
const postController = require("./controllers/postController");
const userController = require("./controllers/userController");

router
    .route("/posts/create")
    .post(
        passport.authenticate("jwt", { session: false }),
        postController.create
    );

router.route("/users/signup").post(userController.signup);
router
    .route("/posts")
    .get(
        passport.authenticate("jwt", { session: false }),
        postController.getAll
    );

// User
// routes.post("/users/signup", userController.signup);

// // Post Routes
// routes.post(
//     "/posts/create",
//     passport.authenticate("jwt", { session: false }),
//     userController,
//     postController.create
// );
// routes.get("/posts", postController.getAll);
// routes.get("/posts/get/:id", postController.get);
// routes.delete("/posts/remove/:id", postController.remove);

module.exports = router;
