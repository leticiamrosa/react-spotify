import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import history from '../../routes/history';
import signInReducer from './signInReducer';
import getToken from './token';
import getUser from './getUser';

export default combineReducers({
  signIn: signInReducer,
  token: getToken,
  user: getUser,
  router: connectRouter(history),
})