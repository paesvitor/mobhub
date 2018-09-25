import React from "react";
import Dashboard from "templates/dashboard";
import {
    MdBrightness1 as StatusIcon,
    MdOpenInNew as LinkIcon
} from "react-icons/md";
import { postsRef } from "modules/firebase";
import ListCard from "components/ListCard";
import EmptyList from "components/empty-list";
import moment from "moment";

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
                {posts ? (
                    Object.keys(posts).map(key => {
                        const post = posts[key];
                        return (
                            <ListCard
                                thumbnail={post.thumbnail}
                                preTitle={post.category}
                                title={post.title}
                                subtitle={`Created by: ${
                                    post.createdBy
                                } at ${moment(post.createdAt).format("LL")}`}
                                link={`/p/${key}`}
                                key={key}
                          />
                        );
                    })
                ) : (
                    <EmptyList action="/dashboard/add-post">
                        No posts created. Add new post
                  </EmptyList>
                )}
          </Dashboard>
        );
    }
}

export default DashboardPosts;
