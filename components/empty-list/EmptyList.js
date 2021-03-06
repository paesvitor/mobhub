import { Link } from "routes";
import {
    MdBrightness1 as StatusIcon,
    MdOpenInNew as LinkIcon
} from "react-icons/md";
import styled, { css } from "styled-components";

const EmptyList = styled.div`
    ${({ theme, action }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        border: 1px dashed #bfd7ff;
        color: #94bbfd;
        font-weight: bold;
        cursor: ${action ? "pointer" : "default"};
    `};
`;

const EmptyListComponent = props => (
    <EmptyList {...props}>{props.children}</EmptyList>
);

export default EmptyListComponent;
