import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    position: fixed;
    width: 100%;
    top: 25px;
    left: auto;
    padding: 12px 400px;
    @media (max-width: 1100px) {
        padding: 12px 300px;
    }
    @media (max-width: 900px) {
        padding: 12px 150px;
    }
    @media (max-width: 600px) {
        padding: 12px 70px;
    }
`;

export const HeaderLogo = styled.h1`
    font-size: 22px;
    color: #4da6ff;
`;