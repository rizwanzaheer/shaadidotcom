/**
 *
 * ForgetPasswordModal
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Logo from '../../images/home-page-layer-logo.png';
import './ForgetPassword.scss';

class ForgetPasswordModal extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
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
            <div className="text-center">
              <Link to="#" className="forget-password-btn">
                <button
                  className="btn btn-block waves-effect waves-light modal-action modal-close text-white"
                  type="submit"
                  name="action"
                >
                  <FormattedMessage {...messages.sendPasswordBtnText} />
                </button>
              </Link>
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
