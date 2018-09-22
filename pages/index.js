import React, { Fragment } from "react";
import styled from "styled-components";
import { Button } from "sagan-ui";
import Sidebar from "components/Sidebar";

const Page = styled.div`
    display: flex;
    height: 100%;
`;

const Content = styled.div`
    flex: 1;
`;

export default () => (
    <Page>
        <Sidebar />
        <Content>content</Content>
    </Page>
);
