import styled from "styled-components";

const InputStyled = styled.input`
    width: 100%;
    border: 0;
    border-bottom: 2px solid #4da6ff;
    padding: 10px;
    &:focus {
        outline: 2px solid #4da6ff;
        border-bottom: 0;
    }
    @media (max-width: 900px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        width: 100%;
    }
`;

export default InputStyled;