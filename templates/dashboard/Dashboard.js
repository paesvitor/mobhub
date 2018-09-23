import React, { Fragment } from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const Dashboard = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Wrapper = styled.div`
    flex: 1;
    display: flex;
`;

const Content = styled.div`
    flex: 1;
    padding: 1rem;
`;

export default props => (
    <Dashboard>
        <Navbar />
        <Wrapper>
            <Sidebar />
            <Content>{props.children}</Content>
        </Wrapper>
    </Dashboard>
);
