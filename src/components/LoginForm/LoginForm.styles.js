import styled from "styled-components";

export const LoginFormStyled = styled.form`
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 40px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    @media (max-width: 1100px) {
        width: 400px;
    }
    @media (max-width: 900px) {
        width: 300px;
    }
    @media (max-width: 600px) {
        width: 200px;
    }
`;

export const FormTitleStyled = styled.h2`
    text-align: center;
    color: #4da6ff;
`;