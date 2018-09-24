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
    .add("dashboard-users", "/dashboard/users", "dashboard-users")
    .add("dashboard-profile", "/dashboard/profile", "dashboard-profile")
    .add("dashboard-add-user", "/dashboard/add-user", "dashboard-add-user")
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
