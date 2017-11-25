/**
 *
 * HomeNavbar
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Logo from '../../images/home-logo.png';

// import styled from 'styled-components';

import './HomeNavbar.scss';

class HomeNavbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="HomeNavbar-container container">
        <NavLink to="https://shaadidotcom.herokuapp.com" target="_blank">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <Link to="#" className="pull-right help-btn">
          <FormattedMessage {...messages.help} />
          <i className="fa fa-angle-down" aria-hidden="true" />
        </Link>
        <Link to="#" className="pull-right customer-care-avatar">
          <span />
        </Link>
        <Link
          to="#modal"
          className="pull-right login-btn modal-trigger"
          data-target="modal"
        >
          <FormattedMessage {...messages.login} />
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
