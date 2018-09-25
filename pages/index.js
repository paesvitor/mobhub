import React, { Component, Fragment } from "react";
import { postsRef } from "modules/firebase";
import PostList from "modules/post/containers/post-list";
import { Button } from "sagan-ui";
import { Link } from "routes";
import PageLoader from "components/page-loader";

export class Index extends Component {
    static async getInitialProps() {
        try {
            const posts = await postsRef.once("value").then(snap => snap.val());

            return { posts };
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { posts } = this.props;

        return (
            <Fragment>
            <div className="text-center p-xl">
                    <h1 className="mb-md">Blog Teste</h1>

                <Link route="/dashboard/home">
                      <Button
                          style={{ margin: "0 auto" }}
                          border="pill"
                          size="xs"
                            color="secondary"
                        >
                            admin area
                        </Button>
                    </Link>
              </div>

                <PostList posts={posts} />
          </Fragment>
        );
    }
}

export default Index;
