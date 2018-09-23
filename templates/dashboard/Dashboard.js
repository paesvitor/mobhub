import React, { Fragment } from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

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
    margin: 2rem 5rem;
    display: flex;
    flex-direction: column;
    .content-header {
        h2 {
            margin-bottom: 1rem;
            color: #36474f;
            font-weight: 300;
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

export default props => (
    <Dashboard>
        <Navbar />
        <Wrapper>
            <Sidebar />
            <Content>
                <div className="content-header">
                    <h2>{props.title}</h2>
                </div>

                <div className="content-body">{props.children}</div>
            </Content>
        </Wrapper>
    </Dashboard>
);
