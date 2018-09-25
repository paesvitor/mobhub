const express = require("express");
const routes = express();

// Controllers
const basicController = require("./controllers/basicController");

// Basic Route [GET]
routes.get("/dashboard/home", basicController.get);

// Basic Route [POST]
//routes.post('/path', routeName);

module.exports = routes;
