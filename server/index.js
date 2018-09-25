const express = require("express");
const bodyParser = require("body-parser");
// const session = require("express-session");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const next = require("next");
const pathMatch = require("path-match");
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require("url");

const mongoose = require("mongoose");

const apiRoutes = require("./api/routes");
const routes = require("../routes");
const routesHandler = routes.getRequestHandler(app);

app.prepare().then(() => {
    const server = express();

    mongoose.connect(
        "mongodb://127.0.0.1/mobhub",
        () => {
            console.log("Connected to mongodb");
        }
    );

    server.use(bodyParser.json());
    // server.use(
    //     session({
    //         secret: "super-secret-key",
    //         resave: false,
    //         saveUninitialized: false,
    //         cookie: { maxAge: 60000 }
    //     })
    // );

    server.use("/api", apiRoutes);
    server.use(routesHandler);

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    /* eslint-disable no-console */
    server.listen(3000, err => {
        if (err) throw err;
        console.log("Server ready on http://localhost:3000");
    });
});
