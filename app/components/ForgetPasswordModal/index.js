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
import './ForgetPassword.scss';

class ForgetPasswordModal extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="forget-password-modal">
        <Modal
          open={this.props.isOpenForgetPasswordModal}
          onClose={this.props.onCloseModal}
          little
        >
          <h3>
            <FormattedMessage {...messages.header} />
          </h3>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
        </Modal>
      </div>
    );
  }
}

ForgetPasswordModal.propTypes = {
  isOpenForgetPasswordModal: PropTypes.bool,
  onCloseModal: PropTypes.func,
};

export default ForgetPasswordModal;
