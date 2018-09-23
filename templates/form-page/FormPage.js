import React from "react";
import styled from "styled-components";

const FormPage = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    background-image: linear-gradient(#2979ff, #8c9eff);
    align-items: center;

    h2 {
        color: #fff;
        margin-bottom: 1rem;
    }

    form {
        width: 30%;
        background-color: #fff;
        padding: 3rem 2rem;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
`;

export default props => <FormPage>{props.children}</FormPage>;
