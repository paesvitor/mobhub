import React, { Component } from "react";
import Dashboard from "templates/dashboard";

export class DashboardPosts extends Component {
    render() {
        return (
            <Dashboard
                title="Posts"
                action="Add new post"
                actionUrl="/dashboard/add-post"
            >
                posts
            </Dashboard>
        );
    }
}

export default DashboardPosts;
