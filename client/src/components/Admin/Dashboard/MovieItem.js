import React from 'react';
import FontAwesome from 'react-fontawesome';

const MovieItem = ({ movie, deleteMovie }) => {
  const weekdayTimes = movie.movieTimes.weekdayTimes;
  const weekendTimes = movie.movieTimes.weekendTimes;

  let weekdayMap = weekdayTimes.map((time, i) => {
    return <div className="time-bubble" key={i}>{time}</div>
  })

  let weekendMap = weekendTimes.map((time, i) => {
    return <div className="time-bubble" key={i}>{time}</div>
  })

  return (
    <div className="item-container">
      <div className="left-side">
      <h3 style={{margin: '0'}}>{movie.title}</h3>
      <span style={{fontSize: '10px'}}>{movie.length} min</span>
      </div>
      <div className="time-container">
        <h4>Weekday</h4>
        <div className="bubble-container">
          {weekdayMap}
        </div>
      </div>
      <div className="time-container">
        <h4>Weekend</h4>
        <div className="bubble-container">
          {weekendMap}
        </div>
      </div>
      <div className="delete-icon" onClick={() => deleteMovie(movie._id)}><FontAwesome name="trash" size="lg" /></div>
    </div>
  )
}

export default MovieItem;