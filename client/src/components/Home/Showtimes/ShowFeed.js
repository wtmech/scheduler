import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const ShowFeed = ({ movies }) => {
  const feed = movies.map(movie => <Movie key={movie._id} movie={movie}/>)
  return (
    <div className="feed-container">
      {feed}
    </div>
  )
}
  
ShowFeed.propTypes = {
  movies: PropTypes.array.isRequired
};

export default ShowFeed;