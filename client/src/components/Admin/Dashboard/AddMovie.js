import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, TextField, Button } from '@material-ui/core';
import setMovieTimes from '../../../utils/setMovieTimes';

import { connect } from 'react-redux';
import { addMovie } from '../../../actions/movieActions';

import './dashboard.css';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieTitle: '',
      movieLength: ''
    }
    this.onChange = this.onChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }


  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

addMovie() {
    let length = parseInt(this.state.movieLength, 10)
    const wdSt =  660 + 30;
    const weSt = wdSt - 30;
    const wdEt = 23 * 60;
    const weEt = 24 * 60;
    let movieTimes = {
      weekdayTimes: [],
      weekendTimes: []
    }

    setMovieTimes(length, wdSt, movieTimes.weekdayTimes, wdEt);
    setMovieTimes(length, weSt, movieTimes.weekendTimes, weEt);

    const newMovie = {
      title: this.state.movieTitle,
      length: length,
      movieTimes: {
        weekdayTimes: movieTimes.weekdayTimes,
        weekendTimes: movieTimes.weekendTimes
      }
    };

    this.props.addMovie(newMovie);
    this.setState({movieTitle: '', movieLength: ''})
    
  }

  render() {
    return (
      <div className="add-container">
        <Paper className="movie-container">
          <TextField
            className="input"
            name="movieTitle"
            style={{marginRight: '20px'}}
            placeholder="Movie Title"
            type="text"
            value={this.state.movieTitle}
            onChange={this.onChange}
          />
          <TextField
            className="input"
            name="movieLength"
            style={{marginRight: '20px'}}
            placeholder="Length (in minutes)"
            type="number"
            value={this.state.movieLength}
            onChange={this.onChange}
          />
          <Button variant="raised" className="add-btn" onClick={this.addMovie}>Add</Button>
        </Paper>
      </div>
    );
  }
}

AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addMovie })(AddMovie);