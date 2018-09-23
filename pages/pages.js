import React, { Fragment } from "react";
import Dashboard from "templates/dashboard";
import styled, { css } from "styled-components";
import { MdBrightness1 as StatusIcon } from "react-icons/md";
import { Alert } from "sagan-ui";
import { pagesRef } from "modules/firebase";

const PageCard = styled.div`
    ${({ theme }) => css`
        border: 1px solid #e6ecf0;
        padding: 1.5rem;
        border-radius: 3px;
        display: flex;
        align-items: center;
        border-left: 4px solid ${theme.primaryColor};
        background-color: #f9f9f9;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: 0.2s all;

        &:hover {
            box-shadow: 0 1px 10px 4px rgba(0, 0, 0, 0),
                0 1px 9px 0px rgba(0, 0, 0, 0.09);
        }

        .page-name {
            flex: 1;
            font-weight: 500;
        }

        .page-status {
            display: flex;
            align-items: center;
            font-weight: 300;

            svg {
                padding-right: 1rem;
                font-size: 0.7rem;
            }
        }
    `};
`;

class Pages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: {}
        };
    }

    static async getInitialProps(ctx) {
        const pages = await pagesRef
            .once("value")
            .then(snapshot => snapshot.val());
        return {
            pages
        };
    }

    componentWillMount = () => {
        const { pages } = this.props;

        console.log(pages);
    };

    render() {
        const { pages } = this.props;

        return (
            <Dashboard title="Pages">
                {Object.keys(pages).map(key => (
                    <PageCard>
                        <div className="page-name">{pages[key].name}</div>
                        <div className="page-status">Published</div>
                    </PageCard>
                ))}
            </Dashboard>
        );
    }
}

export default Pages;
