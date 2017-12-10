/**
 *
 * ForgetPasswordModal
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import Modal from 'react-responsive-modal';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Logo from '../../images/home-page-layer-logo.png';
import './ForgetPassword.scss';

class ForgetPasswordModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Modal
        open={this.props.isOpenForgetPasswordModal}
        onClose={this.props.onCloseModal}
        little
      >
        <div className="forget-password-modal">
          <div className="modal-body">
            <div className="logo text-center">
              <img src={Logo} alt="Shaadi dot com" />
            </div>
            <h5 className="heading">
              <FormattedMessage {...messages.header} />
            </h5>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                <FormattedMessage {...messages.emailInfo} />
              </small>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

ForgetPasswordModal.propTypes = {
  isOpenForgetPasswordModal: PropTypes.bool,
  onCloseModal: PropTypes.func,
};

export default ForgetPasswordModal;
