const initialState = {
    isLoggedIn: false,
    token: null,
    user: null,
    error: null,
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_START':
          return {
            ...state,
            loading: true
          }
        case 'LOGIN_SUCCESS':
        return {
          ...state,
          isLoggedIn: true,
          token: action.payload,
          loading: false
        }
        case 'SAVE_USER':
          return {
            ...state,
            user: action.payload
          }
        case 'SAVE_SESSION':
          return {
            ...state,
            isLoggedIn: true
          }
        case 'LOGOUT':
          return {
            isLoggedIn: false
          }
        case 'LOGIN_FAIL':
          return {
            ...state,
            error: action.payload
          }

        default:
          return state
      }
}

export default authReducer;