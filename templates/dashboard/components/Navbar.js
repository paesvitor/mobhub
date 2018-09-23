import styled, { css } from "styled-components";

const Navbar = styled.div`
    ${({ theme }) => css`
        padding: 1.3rem 1rem;
        background-color: ${theme.primaryColor};
        color: #fff;

        .navbar-logo {
            font-size: 1.5rem;
            font-weight: 700;
            span {
                font-weight: 300;
            }
        }
    `};
`;

const comp = () => (
    <Navbar>
        <div className="navbar-logo">
            mob
            <span>hub</span>
        </div>
    </Navbar>
);

export default comp;
