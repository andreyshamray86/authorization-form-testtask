import styled from "styled-components";
import { Link } from 'react-router-dom'

export const MenuStyled = styled.ul`
    width: 150px;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #4da6ff;
    &:hover {
        color: #065fb8;
    }
`;