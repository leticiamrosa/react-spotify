import queryString from 'query-string';

const url = 'https://api.spotify.com/v1/me';
// const endpointUser = 'me'
const endpointPlaylist = '/playlists';

let parsed = queryString.parse(window.location.search);
let accessToken = parsed.access_token;

// Get Token
export const setToken = (token) => {
  return {
      type: 'GET_TOKEN_SUCCESS',
      token,
  };
}

export const getToken = () => {
  return (dispatch) => {
    dispatch(setToken(accessToken));
  }
}

// Get User
export const getUserSuccess = (user) => {
  return {
    type: 'GET_USER_SUCCESS',
    user,
  };
}

export const getUserError = (error) => {
  return {
    type: 'GET_USER_ERROR',
    error,
  };
}

export const getUser = () => {
  return (dispatch) => {
    fetch(url, {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getUserSuccess(data))
      }).catch((error) => {
        console.log(error);
        dispatch(getUserError(error))
      })
  }
}


// Get Playlist
export const getUserPlaylistSuccess = (playlist) => {
  return {
    type: 'GET_USER_PLAYLIST_SUCCESS',
    playlist,
  };
}

export const getUserPlaylistError = (error) => {
  return {
    type: 'GET_USER_PLAYLIST_ERROR',
    error,
  };
}

export const getPlaylist = () => {
  return (dispatch) => {
    fetch(url + endpointPlaylist, {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getUserPlaylistSuccess(data));
      }).catch((error) => {
        dispatch(getUserPlaylistError(error));
      })
  }
}