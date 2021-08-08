const initialState = {
    users: [],
    loading: false,
    error: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_USERS_START':
          return {
            ...state,
            loading: true
          }
        case 'LOAD_USERS_SUCCESS':
          return {
            ...state,
            users: action.payload,
            loading: false
          }
        case 'LOAD_USERS_FAIL':
          return {
            ...state,
            loading: false,
            error: action.payload
          }
        default:
          return state
      }
}

export default usersReducer;