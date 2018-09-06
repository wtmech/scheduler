import axios from 'axios';

import { ACTIONS } from './types';

export const addMovie = movieData => dispatch => {
  axios
    .post('/api/movies', movieData)
    .then(res =>
      dispatch({
        type: ACTIONS.ADD_MOVIE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ACTIONS.GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getMovies = () => dispatch => {
  axios
    .get('/api/movies')
    .then(res => 
      dispatch({
        type: ACTIONS.GET_MOVIES,
        payload: res.data
      })
    )
    .catch(err => 
      dispatch({
        type: ACTIONS.GET_MOVIES,
        payload: null
      })
    )
}

// Delete Post
export const deleteMovie = id => dispatch => {
  axios
    .delete(`/api/movies/${id}`)
    .then(res =>
      dispatch({
        type: ACTIONS.DELETE_MOVIE,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: ACTIONS.GET_ERRORS,
        payload: err.response.data
      })
    );
};
