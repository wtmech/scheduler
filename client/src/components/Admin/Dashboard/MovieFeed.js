import React from 'react';
import PropTypes from 'prop-types';

import MovieItem from './MovieItem';

const MovieFeed = ({ movies, deleteMovie }) => {
  const feed = movies.map(movie => <MovieItem key={movie._id} movie={movie}  deleteMovie={deleteMovie}/>)
  return (
    <div className="feed-container">
      {feed}
    </div>
  )
}

MovieFeed.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieFeed;