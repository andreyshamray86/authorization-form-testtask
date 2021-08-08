import React, {useState, useEffect} from 'react'
import {UserListStyled, UserListTitleStyled, SortStyled} from './UserList.styles'
import { connect} from 'react-redux'
import getUsers from '../../redux/actions/userActions'
import User from '../User/User'

import { byParam } from '../../services/sortFunc';

const UserList = ({users, getUsers}) => {

    const [filteredUsers, setFilteredUsers] = useState([]);
    let renderedUsers;

    useEffect(() => {
        getUsers()
    }, [getUsers]);
   
    const sortByID = () => {
        users.sort(byParam('id'));
        setFilteredUsers([...users]);
    }

    const sortByUsername = () => {
        users.sort(byParam('username'));
        setFilteredUsers([...users]);
    }

    filteredUsers.length > 0 ? 
    renderedUsers = filteredUsers : renderedUsers = users;

    return (
        <>
        <UserListTitleStyled>
               Users List
        </UserListTitleStyled>
        <SortStyled onClick={sortByID}>Sort by ID</SortStyled>
        <SortStyled onClick={sortByUsername}>Sort by username</SortStyled>
        <UserListStyled>
            {
                   renderedUsers.map(user => {
                       return <User user={user} key={user.id}/>
                   })
            }
        </UserListStyled>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.user.users
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch(getUsers())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
