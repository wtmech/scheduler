import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import Home from './components/Home/Home';
import Admin from './components/Admin/AdminContainer';
import Dashboard from './components/Admin/Dashboard/Dashboard';


// Check for token
if (localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get admin info
  const decoded  = jwt_decode(localStorage.jwtToken);
  //Set admin and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired token
  const currentTime = Date.now() / 1000; // in seconds
  if (decoded.exp < currentTime) {
    //Logout User
    store.dispatch(logoutUser());
    //Redirect login
    window.location.href = '/admin';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/" component={Home} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
