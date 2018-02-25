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
import * as EmailValidator from 'email-validator';

import SweetAlertPopup from 'components/SweetAlertPopup';

import axios from 'axios';
import messages from './messages';
import { nodeApiServerUrl } from '../../config/envChecker';

import Logo from '../../images/home-page-layer-logo.png';

import './SignupModalStyle.scss';

class SignupModal extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      selectedOption: '',
      isEmailChange: false,
      isPasswordChange: false,
      isEmailExists: false,
      isEmailValid: false,
      reqResError: false,
      reqResErrorText: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.signupNextHandler = this.signupNextHandler.bind(this);
    this.emailValidatorHandler = this.emailValidatorHandler.bind(this);
    this.passwordValidatorHandler = this.passwordValidatorHandler.bind(this);
  }
  onChangeHandler = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  signupNextHandler = () => {
    this.setState({ reqResErrorText: '', reqResError: false });
    const { password, gender, email } = this.state;
    axios
      .post(`${nodeApiServerUrl}/signup`, { password, gender, email })
      .then((res) => {
        SweetAlertPopup(
           'Successfuly Signup',
           'You have successfuly Signup, Now go and login to use serveice.',
           'success',
        );
      })
      .catch((err) => {
        console.log('error: ', err.response);
        const { status, statusText, data } = err.response;
        const { error } = data;
        if (status === 422 && statusText === 'Unprocessable Entity') {
          if (error === 'Email is in use!') {
            this.setState({
              reqResError: true,
              reqResErrorText: error,
            });
          }
        }
      });
  };
  emailValidatorHandler = () => {
    const isValid = EmailValidator.validate(this.state.email);
    this.setState({ isEmailChange: true });
    isValid
      ? this.setState({
        isEmailValid: false,
      })
      : this.setState({
        isEmailValid: true,
      });
  };
  passwordValidatorHandler = () => {
    this.state.password.length > 3
      ? this.setState({
        isPasswordChange: false,
      })
      : this.setState({
        isPasswordChange: true,
      });
  };
  render() {
    const {
      email,
      isEmailChange,
      isPasswordChange,
      isEmailExists,
      isEmailValid,
      reqResError,
    } = this.state;
    return (
      <div>
        <Modal
          open={this.props.isOpenSignupModal}
          onClose={this.props.onCloseModal}
          little
        >
          <div className="signup-modal">
            <div className="modal-body">
              <div className="logo text-center">
                <img src={Logo} alt="Shaadi dot com" />
              </div>
              <h5 className="heading text-center">
                <FormattedMessage {...messages.header} />
              </h5>
              <div className="form-group">
                <label htmlFor="email">
                  <FormattedMessage {...messages.email} />
                </label>
                <input
                  type="email"
                  className={`form-control ${isEmailValid &&
                    'is-invalid'} ${reqResError && 'is-invalid'}`}
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={this.onChangeHandler}
                  onBlur={() => {
                    this.emailValidatorHandler();
                  }}
                />
                {isEmailChange &&
                  !email && (
                    <small id="emailHelp" className="form-text text-danger">
                      Please specify Email Id
                    </small>
                  )}
                {isEmailValid && (
                  <small id="emailHelp" className="form-text text-danger">
                    Please Enter valid Email
                  </small>
                )}
                {isEmailExists && (
                  <small id="emailHelp" className="form-text text-danger">
                    Already registered email, try another
                  </small>
                )}
                {reqResError && (
                  <small id="emailHelp" className="form-text text-danger">
                    Email Already in Use!
                  </small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <FormattedMessage {...messages.password} />
                </label>
                <input
                  type="password"
                  className={`form-control ${isPasswordChange && 'is-invalid'}`}
                  id="password"
                  name="password"
                  onChange={this.onChangeHandler}
                  aria-describedby="passwordHelp"
                  placeholder="Password"
                  onBlur={() => {
                    this.passwordValidatorHandler();
                  }}
                />
                {isPasswordChange && (
                  <small id="passwordHelp" className="form-text text-danger">
                    Please enter 4 to 20 characters password without any spaces
                  </small>
                )}
              </div>
              <div className="form-group">
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender1"
                      value="Male"
                      onChange={() => this.setState({ gender: 'Male' })}
                    />
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender2"
                      value="Female"
                      onChange={() => this.setState({ gender: 'Female' })}
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className="text-center">
                <Link to="#" className="signup-btn">
                  <button
                    className="btn btn-block waves-effect waves-light modal-action modal-close text-white"
                    type="submit"
                    name="action"
                    onClick={this.signupNextHandler}
                  >
                    <FormattedMessage {...messages.nextBtnText} />
                  </button>
                </Link>
              </div>
              <div className="text-center already-member">
                <p>
                  <FormattedMessage {...messages.AlreadyMember} />&nbsp;
                  <Link to="#" onClick={ () => this.props.loginClickHandler()} >Login</Link>
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
  loginClickHandler: PropTypes.func,
};

export default SignupModal;
