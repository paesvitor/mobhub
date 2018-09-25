import styled from "styled-components";
import loader from "./svg-loaders/tail-spin.svg";

const PageLoaderStyled = styled.div`
    ${({ theme }) => `
        display: flex;
        background-color: ${theme.primaryColor};
        height: 100%;
        justify-content: center;
        align-items: center;

        img { width: 90px; }
    `};
`;

const PageLoader = () => (
    <PageLoaderStyled>
        <img src={loader} alt="" />
    </PageLoaderStyled>
);

export default PageLoader;
