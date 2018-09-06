// create object with values = to its key names
import keymirror from 'keymirror';

export const ACTIONS = keymirror({
  //Auth
  GET_ERRORS: null,
  SET_CURRENT_USER: null,

  //Movies
  ADD_MOVIE: null,
  GET_MOVIES: null,
  GET_MOVIE: null,
  DELETE_MOVIE: null,
  CLEAR_ERRORS: null
})