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
import { deletePost } from "modules/post/PostActions";
import Swal from "sweetalert2";
import { Router } from "routes";

class DashboardPosts extends React.Component {
    static async getInitialProps(ctx) {
        const posts = await postsRef
            .once("value")
            .then(snapshot => snapshot.val());
        return {
            posts
        };
    }

    handleDeletePost = (key, title) => {
        Swal({
            title: `Are you sure you want to delete ${title}?`,
            type: "info",
            heightAuto: false,
            showCancelButton: true,
            confirmButtonText: "Confirm"
        }).then(({ value }) => {
            value &&
                deletePost(key) &&
                Swal({
                    title: `${title} has been removed.`,
                    type: "success",
                    heightAuto: false,
                    showCancelButton: true
                }).then(res => {
                    Router.replace("/dashboard/posts");
                });
        });
    };

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
                                deleteAction={() =>
                                    this.handleDeletePost(key, post.title)
                                }
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
