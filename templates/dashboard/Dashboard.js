import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Button } from "sagan-ui";
import { Link } from "../../routes";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/auth";
import PageLoader from "components/page-loader";
import ProgressBar from "components/progress-bar";

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
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    overflow: scroll;
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
    }
`;

class Template extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentWillMount = async () => {
        try {
            await firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    this.setState({ loading: false });
                } else {
                    this.props.router.replace("/dashboard/signin");
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { title, action, actionUrl, children } = this.props;
        const { loading } = this.state;

        if (loading) {
            return <PageLoader />;
        }

        return (
            <Dashboard>
                <Navbar />
                <ProgressBar />
                <Wrapper>
                    <Sidebar />
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

                        <div className="content-body">{children}</div>
                    </Content>
                </Wrapper>
            </Dashboard>
        );
    }
}

const mapStateToProps = state => ({
    authStore: state.auth
});

export default withRouter(connect(mapStateToProps)(Template));
