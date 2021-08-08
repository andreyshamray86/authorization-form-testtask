import styled from "styled-components";

const UserStyled = styled.div`
    width: 300px;
    height: 150px;
    padding: 10px 20px;
    border: 1px solid #4da6ff;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    background-color: #c3cfe2;

    @media (max-width: 1100px) {
        width: 200px;
    }
    @media (max-width: 900px) {
        width: 300px;
    }
    @media (max-width: 600px) {
        width: 200px;
    }
`;

export default UserStyled;