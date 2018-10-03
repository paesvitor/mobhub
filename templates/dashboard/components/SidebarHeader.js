import styled, { css } from "styled-components";
import { Link } from "routes";

const SidebarHeader = styled.div`
    ${({ theme }) => css`
        padding: 1.3rem 1rem;
        background-color: ${theme.primaryColor};
        color: #fff;

        .navbar-logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: #fff;
            span {
                font-weight: 300;
            }
        }
    `};
`;

export default () => (
    <SidebarHeader>
        <Link route="/dashboard/home">
            <a className="navbar-logo">
                mob
                <span>hub</span>
            </a>
        </Link>
    </SidebarHeader>
);
