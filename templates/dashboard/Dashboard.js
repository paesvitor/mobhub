import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import { Button } from "sagan-ui";
import { Link } from "../../routes";
import { withRouter } from "next/router";
import "firebase/auth";
import PageLoader from "components/page-loader";
import ProgressBar from "components/progress-bar";
import Loading from "components/page-loader/svg-loaders/tail-spin-blue.svg";

const Dashboard = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #e6ecf0;
`;

const Wrapper = styled.div`
    flex: 1;
    display: flex;
`;

const Content = styled.div`
    flex: 1;
    /* padding: 1rem; */
    /* margin: 1rem; */
    display: flex;
    flex-direction: column;
    .content-header {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        h2 {
            color: #36474f;
            font-weight: 500;
            flex: 1;
        }
    }

    .content-body {
        padding: 3rem 2rem;
        border-radius: 2px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        flex: 1;
        overflow: scroll;

        .content-loading {
            display: flex;
            flex: 1;
            height: 100%;
            justify-content: center;

            img {
                width: 50px;
            }
        }
    }
`;

class Template extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadingPage: true
        };
    }

    checkAccessToken = async () => {
        try {
            const { router } = this.props;
            const token = await sessionStorage.getItem("access_token");

            if (!token) {
                router.replace("/dashboard/signin");
            } else {
                this.setState({ loadingPage: false });
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount = async () => {
        await this.checkAccessToken();
    };

    render() {
        const {
            title,
            action,
            actionUrl,
            children,
            loadingContent,
            router
        } = this.props;
        const { loadingPage } = this.state;

        if (loadingPage) {
            return <PageLoader />;
        }

        return (
            <Dashboard>
                <ProgressBar />
                <Wrapper>
                    <Sidebar activeUrl={router.asPath} />
                    <Content>
                        <div className="content-header">
                            <h2>{title}</h2>

                            {action && (
                                <Link route={actionUrl}>
                                    <Button
                                        border="pill"
                                        size="xs"
                                        type="default"
                                    >
                                        {action}
                                    </Button>
                                </Link>
                            )}
                        </div>

                        <div className="content-body">
                            {loadingContent ? (
                                <div className="content-loading">
                                    <img src={Loading} />
                                </div>
                            ) : (
                                children
                            )}
                        </div>
                    </Content>
                </Wrapper>
            </Dashboard>
        );
    }
}

export default withRouter(Template);
