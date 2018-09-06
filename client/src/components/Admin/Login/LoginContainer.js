import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, TextField, Button } from '@material-ui/core';
import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import { loginAdmin } from '../../../actions/authActions';

import './login.css';

class LoginContain extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentDidUpdate() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    
    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginAdmin(userData);
  }
  render() {
    const { errors } = this.props;

    return (
      <div className="login-container">
        <Paper className="login-box">
          <h1 className="login-header">Admin Portal</h1>
          <h5 className="login-subheader">Login to your administrative account to edit the movie schedule</h5>
          <div className="form-container">
            <form name="form" onSubmit={this.onSubmit}>
              {errors.email && <h5 style={{color:' #d75452'}}>{errors.email}</h5>}
              <TextField
                className='input email'
                value={this.state.email}
                name="email"
                type="text"
                placeholder="email"
                style={{width: 280, marginBottom: 40}}
                onChange={this.onChange}
              />
              {errors.password && <h5 style={{color:' #d75452'}}>{errors.password}</h5>}
              <TextField
                className='input password'
                value={this.state.password}
                name="password"
                type="password" 
                placeholder="password"
                style={{width: 280, marginBottom: 40}}
                onChange={this.onChange}
              />
              <Button variant="raised" type="submit" style={{background: '#4b8ddf', color: 'white'}}>
              Login
            </Button>
            </form>
          </div>
        </Paper>
      </div>
    );
  }
}

LoginContain.propTypes ={
  loginAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {loginAdmin})(withRouter(LoginContain));
