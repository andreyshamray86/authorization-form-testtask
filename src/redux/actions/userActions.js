import axios from "axios"

const getUsers = () => {
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${token}`
    }
  }

  return dispatch => {
    dispatch(loadUsersStart());

    axios.get('https://agile-garden-50413.herokuapp.com/api/users/', config)
    .then(data => {
      dispatch(loadUsersSuccess(data.data));
    })
    .catch(err => {
      dispatch(loadUsersFail(err));
    })
  }
}

const loadUsersStart = () => {
    return {
      type: 'LOAD_USERS_START'
    }
}

const loadUsersSuccess = (data) => {
    return {
      type: 'LOAD_USERS_SUCCESS',
      payload: data
    }
}

const loadUsersFail = (error) => {
    return {
      type: 'LOAD_USERS_FAIL',
      payload: error
    }
}

export default getUsers;