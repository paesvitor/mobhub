import React, { Component } from "react";
import { postsRef } from "modules/firebase";
import styled, { css } from "styled-components";

const Post = styled.div`
    background: #ececec;
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
    static async getInitialProps({ query }) {
        try {
            const post = await postsRef
                .child(`${query.slug}`)
                .once("value")
                .then(snap => snap.val());
            return { post };
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { post } = this.props;

        return (
            <Post>
                <div
                    className="post-cover"
                    style={{ backgroundImage: `url(${post.thumbnail})` }}
                >
                    <div className="post-cover__title">{post.title}</div>
                </div>

                <div className="post-content">{post.content}</div>
            </Post>
        );
    }
}

export default AppSinglePost;
