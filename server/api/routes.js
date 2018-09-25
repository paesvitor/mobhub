const express = require("express");
const routes = express();

// Controllers
const basicController = require("./controllers/basicController");
const postController = require("./controllers/postController");

// Test Routes
routes.get("/dashboard/home", basicController.get);

// Post Routes
routes.post("/posts/create", postController.create);
routes.get("/posts", postController.getAll);
routes.get("/posts/get/:id", postController.get);
routes.delete("/posts/remove/:id", postController.remove);

module.exports = routes;
