import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { ACTIONS } from './types';

//Register Admin
export const registerAdmin = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => {
      dispatch({
        type: ACTIONS.GET_ERRORS,
        payload: err.response.data
      })
    });
}

//Login, get user token
export const loginAdmin = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      const { token } = res.data
      //set token to localStorage
      localStorage.setItem('jwtToken', token);
      //set token to auth header
      setAuthToken(token);
      //decode token to get user data
      const decoded = jwt_decode(token);
      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: ACTIONS.GET_ERRORS,
        payload: err.response.data
      })
    });
}

//Set logged in admin
export const setCurrentUser = decoded => {
  return {
    type: ACTIONS.SET_CURRENT_USER,
    payload: decoded
  }
}

export const logoutUser = () => dispatch => {
  //Remove token from localStorage
  localStorage.removeItem('jwtToken');
  //Remove Auth Header
  setAuthToken(false);
  //Set current admin to empty object
  dispatch(setCurrentUser({}));
}
