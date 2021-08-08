import React from 'react'
import ButtonStyled from './Button.styles';

const Button = ({type, title}) => {
    return (
        <ButtonStyled type={type}>{title}</ButtonStyled>
    )
}

export default Button;
