const express = require("express");
const routes = express();

// Controllers
const basicController = require("./controllers/basicController");
const postController = require("./controllers/postController");
const userController = require("./controllers/userController");

// Test Routes
routes.get("/dashboard/home", basicController.get);

// User
routes.post("/users/signup", userController.signup);

// Post Routes
routes.post("/posts/create", postController.create);
routes.get("/posts", postController.getAll);
routes.get("/posts/get/:id", postController.get);
routes.delete("/posts/remove/:id", postController.remove);

module.exports = routes;
