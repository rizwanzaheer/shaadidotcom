/**
*
* HomeNavbar
*
*/

import React from "react";
import { Link } from "react-router-dom";
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import "./HomeNavbar.scss";

class HomeNavbar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="HomeNavbar-container">
        {/* <div className="home-navbar-wrapper"> */}
          <Link to="/" className="home_logo">
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
        {/* </div> */}
        {/* <FormattedMessage {...messages.header} /> */}
      </div>
    );
  }
}

HomeNavbar.propTypes = {};

export default HomeNavbar;
