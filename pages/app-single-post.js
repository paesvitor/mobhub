import React, { Component } from "react";
import { getPost } from "modules/post/PostActions";
import styled, { css } from "styled-components";
import axios from "axios";

const Post = styled.div`
    background-color: #e6ecf0;
    height: 100%;

    .post-cover {
        height: 300px;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .post-cover__title {
            color: #fff;
            z-index: 2;
            font-size: 4rem;
        }

        &:after {
            content: "";
            z-index: 1;
            position: absolute;
            background: rgb(0, 0, 0, 0.5);
            width: 100%;
            height: 100%;
        }
    }

    .post-content {
        word-wrap: break-word;
        background-color: #fff;
        border-radius: 3px;
        margin: 5rem;
        padding: 2rem;
    }
`;

export class AppSinglePost extends Component {
    static async getInitialProps(context) {
        const { query } = context || {};

        return { query };
    }

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    fetchData = async () => {
        try {
            const { slug } = this.props.query;
            const post = await getPost(slug);
            this.setState({ post, loading: false });
        } catch (error) {
            this.setState({ error });
        }
    };

    componentWillMount = () => {
        this.fetchData();
    };

    render() {
        const { post, loading } = this.state;

        if (loading) {
            return <div>Loading</div>;
        }

        return (
            <Post>
                <div
                    className="post-cover"
                    style={{ backgroundImage: `url(${post.thumbnail})` }}
                >
                    <div className="post-cover__title">{post.title}</div>
                </div>

                <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: post.text }}
                />
            </Post>
        );
    }
}

export default AppSinglePost;
