let defaultState = {
  token: [],
}

export const getToken = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_TOKEN_SUCCESS':
      return {
        ...state,
        payload: {
          token: action.token,
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

export default getToken;