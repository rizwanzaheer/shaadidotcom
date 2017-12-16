/**
 *
 * SignupModal
 *
 */

import React from 'react';
// import styled from 'styled-components';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './SignupModalStyle.scss';

import Logo from '../../images/home-page-layer-logo.png';

class SignupModal extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Modal
          open={this.props.isOpenSignupModal}
          onClose={this.props.onCloseModal}
          little
        >
          <div className="signup-modal">
            <div className="modal-body">
              {/* <div className="logo text-center">
                <img src={Logo} alt="Shaadi dot com" />
              </div> */}
              <h5 className="heading text-center">
                <FormattedMessage {...messages.header} />
              </h5>
              <div className="form-group">
                <label htmlFor="email">
                  <FormattedMessage {...messages.email} />
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-danger">
                  Please specify Email Id
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <FormattedMessage {...messages.password} />
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="passwordHelp"
                  placeholder="Enter password"
                />
                <small id="passwordHelp" className="form-text text-danger">
                  Please enter 4 to 20 characters password without any spaces
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="createProfileFor">
                  <FormattedMessage {...messages.createProfileFor} />
                </label>
                <input
                  type="dropdown"
                  className="form-control"
                  id="createProfileFor"
                  aria-describedby="createProfileFor"
                  placeholder="Select"
                />
                <small id="createProfileFor" className="form-text text-danger">
                  Please specify whose profile is being created
                </small>
              </div>
              <div className="text-center">
                <Link to="#" className="signup-btn">
                  <button
                    className="btn btn-block waves-effect waves-light modal-action modal-close text-white"
                    type="submit"
                    name="action"
                  >
                    <FormattedMessage {...messages.nextBtnText} />
                  </button>
                </Link>
              </div>
              <div className="text-center already-member">
                <p>
                  <FormattedMessage {...messages.AlreadyMember} />
                  <Link to="#">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

SignupModal.propTypes = {
  isOpenSignupModal: PropTypes.bool,
  onCloseModal: PropTypes.func,
};

export default SignupModal;
