const express = require("express");
const next = require("next");
const routes = require("../routes");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();
const routesHandler = routes.getRequestHandler(app);

app.prepare()
    .then(() => {
        const server = express();

        server.use(routesHandler);

        server.get("/:url", (req, res) => {
            const actualPage = "/single";
            const queryParams = { url: req.params.url };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(3000, err => {
            if (err) throw err;
            console.log("> Ready on http://localhost:3000");
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
