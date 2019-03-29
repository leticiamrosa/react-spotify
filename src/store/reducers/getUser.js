const defaultStatePlaylist = {
  user: [],
};

export const getUser = (state = defaultStatePlaylist, action) => {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        playload: {
          user: action.user,
        },
      };
      case 'GET_USER_ERROR':
        return {
          ...state,
          error: action.error,
        };
        default:
          return {
            ...state,
          };
  }
}

export default getUser;


