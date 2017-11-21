/**
*
* HomeNavbar
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/home-logo.png';
// import styled from 'styled-components';

import './HomeNavbar.scss';

class HomeNavbar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="HomeNavbar-container">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <Link to="#" className="right help-btn">
          Help
          <i className="fa fa-angle-down" aria-hidden="true" />
        </Link>
        <Link to="#" className="right customer-care-avatar">
          <span />
        </Link>
        <Link to="/test" className="right login-btn">
          Login
          <i className="fa fa-angle-down" aria-hidden="true" />
          <span />
        </Link>
      </div>
    );
  }
}

HomeNavbar.propTypes = {};

export default HomeNavbar;
