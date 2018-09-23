const routes = require("next-routes");

module.exports = routes()
    // Dashboard
    .add("dasboard", "/dashboard/home", "dashboard")
    .add("dashboard-pages", "/dashboard/pages", "dashboard-pages")
    .add("dashboard-add-page", "/dashboard/add-page", "dashboard-add-page")
    .add("dashboard-add-post", "/dashboard/add-post", "dashboard-add-post")
    .add("dashboard-posts", "/dashboard/posts", "dashboard-posts")
    // App
    .add({ name: "single", pattern: "/:url", page: "single" });
