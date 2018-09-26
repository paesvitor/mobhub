import React from "react";
import Dashboard from "templates/dashboard";
import {
    MdBrightness1 as StatusIcon,
    MdOpenInNew as LinkIcon
} from "react-icons/md";
import ListCard from "components/ListCard";
import EmptyList from "components/empty-list";
import moment from "moment";
import {
    deletePost,
    getAllPosts as getAllPostsAction
} from "modules/post/PostActions";
import Swal from "sweetalert2";
import { Router } from "routes";
import { connect } from "react-redux";

class DashboardPosts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            loading: true
        };
    }

    fetchData = () => {
        const { hasLoadedPosts, getAllPosts } = this.props;
        !hasLoadedPosts && getAllPosts();
    };

    componentDidMount = () => {
        this.fetchData();
    };

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
        const { hasLoadedPosts, posts } = this.props;

        return (
            <Dashboard
                loadingContent={!hasLoadedPosts}
                title="Posts"
                action="Add new post"
                actionUrl="/dashboard/add-post"
            >
                {posts ? (
                    posts.map(post => {
                        return (
                            <ListCard
                                thumbnail={post.thumbnail}
                                preTitle={post.category}
                                title={post.title}
                                subtitle={`Created by: ${
                                    post.creator
                                } at ${moment(post.createdAt).format("LL")}`}
                                link={`/p/${post.slug}`}
                                key={post.title}
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

const mapStateToProps = ({ postStore }) => ({
    posts: postStore.posts,
    hasLoadedPosts: postStore.hasLoadedPosts
});

const mapDispatchToProps = dispatch => ({
    getAllPosts: () => dispatch(getAllPostsAction())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardPosts);
