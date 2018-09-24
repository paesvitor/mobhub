import React, { Fragment } from "react";
import Dashboard from "templates/dashboard";
import {
    MdBrightness1 as StatusIcon,
    MdOpenInNew as LinkIcon
} from "react-icons/md";
import { postsRef } from "modules/firebase";
import ListCard from "components/ListCard";

class DashboardPosts extends React.Component {
    static async getInitialProps(ctx) {
        const posts = await postsRef
            .once("value")
            .then(snapshot => snapshot.val());
        return {
            posts
        };
    }

    render() {
        const { posts } = this.props;

        return (
            <Dashboard
                title="Posts"
                action="Add new post"
                actionUrl="/dashboard/add-post"
            >
                {Object.keys(posts).map(key => {
                    const post = posts[key];
                    return (
                        <ListCard
                            thumbnail={post.thumbnail}
                            title={post.title}
                            subtitle={`Created by: ${post.createdBy}`}
                            link={`/p/${key}`}
                            key={key}
                        />
                    );
                })}
            </Dashboard>
        );
    }
}

export default DashboardPosts;
