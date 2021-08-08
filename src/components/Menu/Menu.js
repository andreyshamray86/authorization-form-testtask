import React from 'react'
import {useSelector} from 'react-redux'

import {MenuStyled, LinkStyled} from './Menu.styles'

const Menu = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <MenuStyled>
            <LinkStyled to='/user-list'>User List</LinkStyled>
            {isLoggedIn ? 
            <LinkStyled to='/logout'>Logout</LinkStyled> :
            <LinkStyled to='/login'>Login</LinkStyled>
            }
        </MenuStyled>
    )
}

export default Menu
