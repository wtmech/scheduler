import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import movieReducer from './movieReducer';

export default combineReducers({ // single reducing function you pass to createStor
  auth: authReducer,
  errors: errorReducer,
  movie: movieReducer
})