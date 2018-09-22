const routes = require("next-routes")();

module.exports = routes;

routes.add("about").add("post", "/posts/:id");
routes.add("painel").add("dashboard", "/painel");
