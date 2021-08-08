import axios from "axios"

export const signIn = (user, history) => {
    return async (dispatch) => {
        const {username, password} = user;
        try {
          dispatch(loginStart());
          const res = await axios.post('https://agile-garden-50413.herokuapp.com/api/token/login', { username, password });
          dispatch(loginSuccess(res.data.auth_token));
          localStorage.setItem('token', res.data.auth_token);
          history.push('/user-list');
        } catch(error) {
          dispatch(loginError(error));
        }
      };
}

export const signOut = (history) => {
  // const token = localStorage.getItem('token')
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //     'Authorization': `Token ${token}`
  //   }
  // }
  
  return async (dispatch) => {
      try {
        // await axios.post('https://agile-garden-50413.herokuapp.com/api/token/logout/', config);
        dispatch(logout());
        localStorage.removeItem('token');
        history.push('/login');
      } catch(error) {
        console.log(error);
      }
    };
}

export const loginStart = () => {
  return {
    type: 'LOGIN_START'
  }
}

export const loginSuccess = (token) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: token
    }
}

export const saveUser = (user) => {
  return {
    type: 'SAVE_USER',
    payload: user
  }
}

export const saveSession = () => {
  return {
    type: 'SAVE_SESSION'
  }
}

export const logout = () => {
    return {
      type: 'LOGOUT'
    }
}

export const loginError = (error) => {
    return {
      type: 'LOGIN_FAIL',
      payload: error
    }
}