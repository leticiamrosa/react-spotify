
let defaultState = {
  login: [],
}

const signInReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        payload: {
          user: action.user,
          password: action.password,
        },
      };
    case 'USER_LOGIN_ERROR':
      return {
        ...state,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};
export default signInReducer;