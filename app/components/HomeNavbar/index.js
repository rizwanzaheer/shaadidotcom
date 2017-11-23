/**
*
* HomeNavbar
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../../images/home-logo.png';

// import styled from 'styled-components';

import './HomeNavbar.scss';

class HomeNavbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="HomeNavbar-container">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <Link to="#" className="right help-btn">
          Help
          <i className="fa fa-angle-down" aria-hidden="true" />
        </Link>
        <Link to="#" className="right customer-care-avatar">
          <span />
        </Link>
        <Link
          to="#modal"
          className="right login-btn modal-trigger"
          data-target="modal"
        >
          Login
          <i className="fa fa-angle-down" aria-hidden="true" />
          <span />
        </Link>
      </div>
    );
  }
}

HomeNavbar.propTypes = {
  loginClickHandler: PropTypes.func,
};

export default HomeNavbar;
