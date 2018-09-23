const routes = require("next-routes");

module.exports = routes()
    .add("dasboard", "/", "dashboard")
    .add("pages", "/dashboard/pages", "pages");
