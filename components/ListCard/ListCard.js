import { Link } from "routes";
import {
    MdOpenInNew as LinkIcon,
    MdDelete as DeleteIcon,
    MdModeEdit as EditIcon
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

        svg {
            font-size: 1.2rem;

            &:hover {
                color: ${theme.primaryColor};
            }
        }

        &:hover {
            box-shadow: 0 1px 10px 4px rgba(0, 0, 0, 0),
                0 1px 9px 0px rgba(0, 0, 0, 0.09);

            .card-options {
                display: block;
            }
        }

        @keyframes show {
                from {
                    opacity: 0;
                    margin-right: -20px
                }

                to {
                    opacity: 1
                    margin-right: 0px
                }
            }

        .card-options {            
            display: none;
            animation: show .2s linear;
            svg {padding-left: 1rem}
        }

        .card-left {
            flex: 1;
            display: flex;
            align-items: center;
            img {
                width: 50px;
                height: 50px;
                margin-right: 1rem;
                border-radius: 50%;
                border: 1px solid #2175ff;
            }

            .card-title {
                font-weight: 500;

                .card-title-pre {
                    font-size: 0.7rem;
                    font-weight: 300;
                    margin-bottom: 0.3rem;
                }

                .card-subtitle {
                    padding-top: 0.3rem;
                    font-weight: 300;
                    font-size: 0.8rem;
                }
            }
        }

        .card-right {
            margin-left: 1rem;
            display: flex;
            align-items: center;
            font-weight: 300;
        }
    `};
`;

const ListCard = ({
    title,
    preTitle,
    link,
    thumbnail,
    subtitle,
    helper,
    deleteAction,
    editAction
}) => (
    <ListCardStyled>
        <div className="card-left">
            {thumbnail && <img src={thumbnail} />}
            <div className="card-title">
                <div className="card-title-pre">{preTitle}</div>
                <div>{title}</div>
                {subtitle && <div className="card-subtitle">{subtitle}</div>}
            </div>
        </div>

        <div className="card-options">
            {deleteAction && <DeleteIcon onClick={deleteAction} />}
            {editAction && <EditIcon onClick={editAction} />}
        </div>

        <div className="card-right">
            {link && (
                <Link route={link}>
                    <LinkIcon />
                </Link>
            )}

            {helper && <div className="card-helper">{helper}</div>}
        </div>
    </ListCardStyled>
);

export default ListCard;
