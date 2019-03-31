const defaultStatePlaylist = {
  playlist: [],
};

export const getPlaylist = (state = defaultStatePlaylist, action) => {
  switch (action.type) {
    case 'GET_USER_PLAYLIST_SUCCESS':
      return {
        ...state,
        playload: {
          playlist: action.playlist,
        },
      };
      case 'GET_USER_PLAYLIST_ERROR':
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

export default getPlaylist;


