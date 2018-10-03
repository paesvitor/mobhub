import React from "react";
import styled from "styled-components";

const FormPage = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    background-image: ${({ theme }) =>
        `linear-gradient(${theme.primaryColor ||
            "#000"}, ${theme.secondaryColor || "#000"});`};
    align-items: center;

    &:after {
        content: "";
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-size: cover;
        background-image: url("http://upload.wikimedia.org/wikipedia/commons/8/8c/K2,_Mount_Godwin_Austen,_Chogori,_Savage_Mountain.jpg");
        opacity: 0.1;
    }

    h2 {
        color: #000;
        margin-bottom: 1rem;
        font-weight: 300;
    }

    hr {
        border: 0;
        height: 1px;
        background: #d6d6d6;
        margin: 2rem 0rem;
    }

    form {
        z-index: 2;
        width: 30%;
        background-color: #fff;
        padding: 2rem;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    .form-link {
        color: #000;
        font-weight: 300;
        text-transform: lowercase;
        display: block;
        text-align: center;
        margin-top: 1rem;

        span {
            font-weight: bold;
            color: ${({ theme }) => theme.primaryColor || "red"};
        }
    }
`;

export default props => <FormPage {...props}>{props.children}</FormPage>;
