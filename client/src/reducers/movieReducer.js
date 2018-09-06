import { ACTIONS } from '../actions/types';

const initialState = {
  movies: [],
  movie: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case ACTIONS.GET_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    case ACTIONS.ADD_MOVIE:
      return {
        ...state,
        movies: [action.payload, ...state.movies]
      };
    case ACTIONS.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie._id !== action.payload)
      };
    default:
      return state;
  }
}