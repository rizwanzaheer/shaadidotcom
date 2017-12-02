/**
 *
 * HomeNavbar
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import SignInModal from 'components/Modal';
import Modal from 'react-responsive-modal';
// import 'react-responsive-modal/lib/react-responsive-modal.css';
import messages from './messages';

import Logo from '../../images/home-logo.png';

// import styled from 'styled-components';

import './HomeNavbar.scss';

class HomeNavbar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.state = {
      openSigninModal: false,
      openHelpModal: false,
      open: false,
    };
  }
  onOpenModal() {
    this.setState({ open: true }, () => {
      console.log('this.state.open: ', this.state.open);
    });
  }

  onCloseModal() {
    this.setState({ open: false });
  }

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
          to="#"
          className="pull-right login-btn modal-trigger"
          onClick={this.onOpenModal}
        >
          <FormattedMessage {...messages.login} />
          <i className="fa fa-angle-down" aria-hidden="true" />
          <span />
        </Link>
        <Modal open={this.state.open} onClose={this.onCloseModal} little>
          <SignInModal />
        </Modal>
        {/* <SignInModal
          isModalOpen={this.state.openSigninModal}
          onCloseModal={() => this.onCloseModal}
        /> */}
      </div>
    );
  }
}

HomeNavbar.propTypes = {
  loginClickHandler: PropTypes.func,
};

export default HomeNavbar;
