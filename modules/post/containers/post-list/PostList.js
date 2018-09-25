import React from "react";
import styled from "styled-components";
import { Button } from "sagan-ui";
import { Link } from "routes";

const PostList = styled.section`
    padding: 2rem;

    article {
        display: flex;
        align-items: center;
        word-wrap: break-word;
        margin-bottom: 2rem;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

        img {
            width: 400px;
            height: 200px;
        }

        .post-right {
            flex: 1;
            padding: 2rem;
            width: 1px;

            .post-title {
                margin-bottom: 1rem;
            }

            .post-content {
                word-wrap: break-word;
                color: #757575;
                font-weight: 300;
            }
        }
    }
`;

class PostListContainer extends React.Component {
    render() {
        const { posts } = this.props;

        return (
            <PostList>
                {Object.keys(posts).map(key => {
                    const post = posts[key];

                    return (
                        <article key={key}>
                            <img src={post.thumbnail} alt={post.title} />

                            <div className="post-right">
                                <h2 className="post-title">{post.title}</h2>
                                <p className="post-content">
                                    {post.content.replace(
                                        /<\/?[^>]+(>|$)/g,
                                        ""
                                    )}
                              </p>

                                <Link route={`/p/${key}`}>
                                    <Button
                                        size="xs"
                                        border="pill"
                                        className="mt-xl"
                                  >
                                        View Post
                                  </Button>
                              </Link>
                          </div>
                      </article>
                    );
                })}
          </PostList>
        );
    }
}

export default PostListContainer;
