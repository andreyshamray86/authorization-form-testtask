import styled from "styled-components";

const ButtonStyled = styled.button`
    padding: 5px 10px;
    margin-top: 30px;
    border: 2px solid #4da6ff;
    background-color: #fff;
    color:#4da6ff;
    text-align:center;
    font-size: 16px;
    transition: all 0.4s;
    &:hover {
        background-color: #4da6ff;
        color:#fff;
    }
    &:focus {
        outline: none;
        border: 3px solid #4da6ff;
    }
`;

export default ButtonStyled;