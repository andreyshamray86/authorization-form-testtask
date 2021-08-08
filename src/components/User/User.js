import React from 'react'
import UserStyled from './User.styles'

const User = ({user}) => {
    const {username, date_joined, last_login, last_name, first_name, email, id} = user;
    return (
        <UserStyled>
            <h3>{username}</h3>
            <p>Date joined: {date_joined}</p>
            <p>Last login: {last_login}</p>
            <p>{last_name}</p>
            <p>{first_name}</p>
            <p>{email}</p>
            <p>ID: {id}</p>
        </UserStyled>
    )
}

export default User
