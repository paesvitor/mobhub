import React, { Fragment } from "react";
import Dashboard from "templates/dashboard";
import styled, { css } from "styled-components";
import { MdBrightness1 as StatusIcon } from "react-icons/md";

const PageCard = styled.div`
    ${({ theme }) => css`
        border: 1px solid #e6ecf0;
        padding: 1.5rem;
        border-radius: 3px;
        display: flex;
        align-items: center;
        border-left: 4px solid ${theme.primaryColor};
        background-color: #f9f9f9;
        margin-bottom: 2rem;
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

export default () => (
    <Dashboard title="Pages">
        <div>
            <PageCard>
                <div className="page-name">Home</div>

                <div className="page-status">
                    <StatusIcon color="#00e870" />
                    Published
                </div>
            </PageCard>

            <PageCard>
                <div className="page-name">About</div>

                <div className="page-status">
                    <StatusIcon color="#00e870" />
                    Published
                </div>
            </PageCard>

            <PageCard>
                <div className="page-name">Contact</div>

                <div className="page-status">
                    <StatusIcon color="#00e870" />
                    Published
                </div>
            </PageCard>
        </div>
    </Dashboard>
);
