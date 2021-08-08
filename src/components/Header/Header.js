import React from 'react'
import Menu from '../Menu/Menu'
import {HeaderStyled, HeaderLogo} from './Header.styles'

const Header = () => {
    return (
        <HeaderStyled>
            <HeaderLogo>Test App</HeaderLogo>
            <Menu/>
        </HeaderStyled>
    )
}

export default Header
