import styled, { css } from "styled-components";
import {
    MdDescription as PageIcon,
    MdPermMedia as MediaIcon,
    MdSettings as ConfigIcon,
    MdLiveHelp as HelpIcon,
    MdLocalCafe as VersionIcon
} from "react-icons/md";
import { Button } from "sagan-ui";

const Sidebar = styled.div`
    ${({ theme }) => css`
        width: 250px;
        background-color: #37474f;
        display: flex;
        flex-direction: column;

        .sidebar-header {
            padding: 1rem;
        }

        hr {
            margin: 2rem;
            border-color: #838f94;
        }

        .sidebar-menu {
            flex: 1;
        }

        .sidebar-link {
            padding: 1rem;
            display: block;
            border-left: 4px solid transparent;
            transition: 0.15s all;
            display: flex;
            align-items: center;
            cursor: pointer;
            text-transform: lowercase;
            font-weight: 300;
            color: #838f94;

            .sidebar-link__label {
                text-decoration: none;
                flex: 1;
            }

            svg {
                padding-right: 1rem;
                font-size: 1.5rem;
            }

            &:hover {
                background-color: rgba(255, 255, 255, 0.08);
                border-color: ${theme.primaryColor};
                color: #fff;
            }

            &:active {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }

        .app-version {
            padding: 1rem;
            text-align: center;
            font-size: 0.9rem;
            color: #838f94;
            display: flex;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 100;

            svg {
                padding-right: 1rem;
            }
        }
    `};
`;

const comp = () => (
    <Sidebar>
        <div className="sidebar-header">
            <Button fluid border="rounded" color="success">
                add page
            </Button>
        </div>

        <div className="sidebar-menu">
            <a className="sidebar-link">
                <PageIcon />
                <div className="sidebar-link__label">Pages</div>
            </a>

            <a className="sidebar-link">
                <MediaIcon />
                <div className="sidebar-link__label">Media</div>
            </a>

            <a className="sidebar-link">
                <ConfigIcon />
                <div className="sidebar-link__label">Configuration</div>
            </a>

            <hr />

            <a className="sidebar-link">
                <HelpIcon />
                <div className="sidebar-link__label">help</div>
            </a>
        </div>

        <div className="sidebar-footer">
            <div className="app-version">
                <VersionIcon />
                version: alpha 0.0.1
            </div>
        </div>
    </Sidebar>
);

export default comp;