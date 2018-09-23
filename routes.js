const routes = require("next-routes");

module.exports = routes()
    // Dashboard
    .add("dasboard", "/dashboard/home", "dashboard")
    .add("dashboard-pages", "/dashboard/pages", "dashboard-pages")
    .add("dashboard-add-page", "/dashboard/add-page", "dashboard-add-page")
    .add("dashboard-add-post", "/dashboard/add-post", "dashboard-add-post")
    .add("dashboard-posts", "/dashboard/posts", "dashboard-posts")
    .add("dashboard-signin", "/dashboard/signin", "dashboard-signin")
    .add("dashboard-signup", "/dashboard/signup", "dashboard-signup")
    // App
    .add({
        name: "app-single-page",
        pattern: "/:slug",
        page: "app-single-page"
    })
    .add({
        name: "app-single-post",
        pattern: "/p/:slug",
        page: "app-single-post"
    });
