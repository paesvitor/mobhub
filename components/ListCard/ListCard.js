import Link from "next/link";
import {
    MdBrightness1 as StatusIcon,
    MdOpenInNew as LinkIcon
} from "react-icons/md";
import styled, { css } from "styled-components";

const ListCardStyled = styled.div`
    ${({ theme }) => css`
        border: 1px solid #e6ecf0;
        padding: 1rem;
        border-radius: 3px;
        display: flex;
        align-items: center;
        border-left: 4px solid ${theme.primaryColor};
        background-color: #f9f9f9;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: 0.2s all;

        &:hover {
            box-shadow: 0 1px 10px 4px rgba(0, 0, 0, 0),
                0 1px 9px 0px rgba(0, 0, 0, 0.09);
        }

        .page-name {
            flex: 1;
            font-weight: 500;

            .page-url {
                padding-top: 0.3rem;
                font-weight: 300;
            }
        }

        .page-status {
            display: flex;
            align-items: center;
            font-weight: 300;

            svg {
                padding-left: 1rem;
                font-size: 1rem;

                &:hover {
                    color: ${theme.primaryColor};
                }
            }
        }
    `};
`;

const ListCard = ({ item, slug, path }) => (
    <ListCardStyled>
    <div className="page-name">
            {item.name || item.title}{" "}
            <div className="page-url"> slug: {slug}</div>
      </div>
        <div className="page-status">
            Published{" "}
            <Link href={`${path || "/"}${slug}`}>
                <LinkIcon />
          </Link>
      </div>
  </ListCardStyled>
);

export default ListCard;
