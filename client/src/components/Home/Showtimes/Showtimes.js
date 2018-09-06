import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovies } from '../../../actions/movieActions';
import ShowFeed from './ShowFeed';

import './showtimes.css';

class Showtimes extends Component {

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { movies } = this.props.movie;

    return (
      <div className="content-container">
        <ShowFeed movies={movies}/>
      </div>
    );
  }
}

Showtimes.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  movie: state.movie
})

export default connect(mapStateToProps, { getMovies })(Showtimes);