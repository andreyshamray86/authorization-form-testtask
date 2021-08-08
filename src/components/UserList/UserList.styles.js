import styled from "styled-components";

export const UserListStyled = styled.div`
    width: 800px;
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    border: 2px solid #4da6ff;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    background-color: #fff;
    @media (max-width: 1100px) {
        width: 600px;
        justify-content: space-around;
        padding: 10px;
    }
    @media (max-width: 900px) {
        width: 600px;
        flex-direction: column;
    }
    @media (max-width: 600px) {
        width: 500px;
        flex-direction: column;
    }
`;

export const UserListTitleStyled = styled.h2`
    color: #4da6ff;
    text-align: center;
`;

export const SortStyled = styled.span`
    color: #4da6ff;
    font-weight: bold;
    margin-right: 20px;
    padding: 2px 10px;
    border: 2px solid #4da6ff;
    border-bottom: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #fff;
    cursor: pointer;
`;