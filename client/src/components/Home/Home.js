import React, { Component, Fragment } from 'react';

import Header from './Header/Header';
import Showtimes from './Showtimes/Showtimes';


class Home extends Component {
  render() {
    return (
      <Fragment>
      <Header />
      <Showtimes />
      </Fragment>
    );
  }
}

export default Home;