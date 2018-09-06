import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import './header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <h2 className="logo">FANDANGO lite</h2>
      </div>
      <div className="employee-login">
        <Link to="/admin">
          <Button variant="raised" type="submit" style={{background: '#4b8ddf', color: 'white'}}>
            Employee Login
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;