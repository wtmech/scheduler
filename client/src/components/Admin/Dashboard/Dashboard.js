import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';
import { getMovies, deleteMovie } from '../../../actions/movieActions';

import AddMovie from './AddMovie';
import MovieFeed from './MovieFeed';

class Dashboard extends Component {

  componentDidMount() {
    this.props.getMovies();
  }
  
  logoutAdmin(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  deleteMovie(id) {
    this.props.deleteMovie(id);
  }

  render () {
    const { movies } = this.props.movie;

    return (
      <div>
        <a href="" onClick={this.logoutAdmin.bind(this)}>logout</a>
        <AddMovie />
        <MovieFeed movies={movies} deleteMovie={this.deleteMovie.bind(this)}/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getMovies: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  movie: state.movie
})

export default connect(mapStateToProps, { logoutUser, getMovies, deleteMovie })(Dashboard);