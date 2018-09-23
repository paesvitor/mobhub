const routes = require("next-routes");

module.exports = routes()
    .add("dasboard", "/", "dashboard")
    .add("pages", "/dashboard/pages", "pages")
    .add("add-page", "/dashboard/pages/add", "add-page");
