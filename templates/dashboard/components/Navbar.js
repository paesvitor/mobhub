import styled, { css } from "styled-components";

const Navbar = styled.div`
    ${({ theme }) => css`
        padding: 1.5rem 1rem;
        background-color: ${theme.primaryColor};
        color: #fff;
    `};
`;

const comp = () => (
    <Navbar>
        <div>mobhub</div>
    </Navbar>
);

export default comp;
