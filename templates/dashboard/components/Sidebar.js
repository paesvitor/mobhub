import styled, { css } from "styled-components";
import {
    MdDescription as PageIcon,
    MdPermMedia as MediaIcon,
    MdSettings as ConfigIcon,
    MdLiveHelp as HelpIcon,
    MdBrightness1 as VersionIcon,
    MdBrightness1 as PanelIcon,
    MdPowerSettingsNew as LogoutIcon,
    MdSupervisorAccount as UserIcon,
    MdPerson as ProfileIcon
} from "react-icons/md";
import { Button } from "sagan-ui";
import { Link, Router } from "routes";
import { signout } from "modules/auth/AuthActions";
import SidebarHeader from "./SidebarHeader";

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
            text-transform: initial;
            font-weight: 600;
            color: #838f94;

            .sidebar-link__label {
                text-decoration: none;
                flex: 1;
            }

            svg {
                padding-right: 1rem;
                font-size: 1.5rem;
                color: #838f94;
            }

            &:hover {
                background-color: rgba(255, 255, 255, 0.08);
                border-color: ${theme.primaryColor};
                color: #fff;
            }
        }

        .active {
            background-color: rgba(255, 255, 255, 0.08);
            border-color: ${theme.primaryColor};
            color: #fff;
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
                padding-right: 0.5rem;
                color: #69f0ae;
                font-size: 0.5rem;
            }
        }
    `};
`;

const menuOptions = [
    { route: "/dashboard/pages", name: "Pages", icon: <PageIcon /> },
    { route: "/dashboard/posts", name: "Posts", icon: <PageIcon /> },
    { route: "/dashboard/profile", name: "Profile", icon: <ProfileIcon /> },
    { route: "/dashboard/users", name: "Users", icon: <UserIcon /> },
    {
        route: "/dashboard/configuration",
        name: "Configuration",
        icon: <ConfigIcon />
    }
];

const Component = ({ activeUrl }) => {
    return (
        <Sidebar>
            <SidebarHeader />

            <div className="sidebar-header">
                <Link route="/dashboard/add-post">
                    <Button
                        fluid
                        size="sm"
                        border="rounded"
                        color="primary"
                        type="light"
                    >
                        add post
                    </Button>
                </Link>
            </div>

            <div className="sidebar-menu">
                {menuOptions.map(menuOption => (
                    <Link key={menuOption.route} route={menuOption.route}>
                        <a
                            className={`sidebar-link ${
                                activeUrl === menuOption.route ? "active" : ""
                            }`}
                        >
                            {menuOption.icon}
                            <div className="sidebar-link__label">
                                {menuOption.name}
                            </div>
                        </a>
                    </Link>
                ))}

                <hr />

                <a
                    className="sidebar-link"
                    onClick={() => {
                        signout(), Router.replace("/");
                    }}
                >
                    <LogoutIcon />
                    <div className="sidebar-link__label">Logout</div>
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
};

export default Component;
