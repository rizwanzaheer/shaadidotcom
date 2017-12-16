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
import Select from 'react-select';
import * as EmailValidator from 'email-validator';
import { nodeApiServerUrl } from '../../config/envChecker';
import axios from 'axios';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './SignupModalStyle.scss';

import Logo from '../../images/home-page-layer-logo.png';

const DROPDOWN_DATA = [
  { value: '', label: 'Select' },
  { value: 'Self', label: 'Self' },
  { value: 'Son', label: 'Son' },
  { value: 'Daughter', label: 'Daughter' },
  { value: 'Brother', label: 'Brother' },
  { value: 'Sister', label: 'Sister' },
  { value: 'Friend', label: 'Friend' },
  { value: 'Relative', label: 'Relative' },
];

class SignupModal extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      createProfileFor: '',
      selectedOption: '',
      isEmailChange: false,
      isPasswordChange: false,
      isCreateProfileForChange: false,
      isEmailExists: false,
      isEmailValid: false,
      reqResError: false,
      reqResErrorText: '',
    };
    this.handleChange = this.handleChange.bind(this);
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
    console.log('signup next handler', this.state);
    this.setState({ reqResErrorText: '' });
    axios
      .post(`${nodeApiServerUrl}/signup`, this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('error: ', err.response);
        const { status, statusText, data } = err.response;
        const { error } = data;
        if (status === 422 && statusText === 'Unprocessable Entity') {
          if (error === 'Email is in use') {
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
    isValid
      ? this.setState({
        isEmailValid: false,
      })
      : this.setState({
        isEmailValid: true,
      });
    console.log('isValid: ', isValid);
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
  handleChange = (selectedOption) => {
    const newValue = selectedOption === null ? '' : selectedOption.value;
    if (newValue) {
      this.setState({ createProfileFor: newValue });
    } else {
      this.setState({ createProfileFor: '' });
    }
  };
  render() {
    const {
      email,
      password,
      createProfileFor,
      isEmailChange,
      isPasswordChange,
      isCreateProfileForChange,
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
                  className={`form-control ${isEmailValid && 'is-invalid'}`}
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={this.onChangeHandler}
                  onBlur={() => {
                    this.setState({ isEmailChange: true });
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
                    Email is already in Use!
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
                  placeholder="Enter password"
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
                <label htmlFor="createProfileFor">
                  <FormattedMessage {...messages.createProfileFor} />
                </label>
                <Select
                  name="createProfileFor"
                  id="createProfileFor"
                  isCreateProfileForChange
                  value={createProfileFor}
                  onChange={this.handleChange}
                  onBlur={() =>
                    this.setState({ isCreateProfileForChange: true })
                  }
                  options={DROPDOWN_DATA}
                  clearable
                />
                {isCreateProfileForChange &&
                  !createProfileFor && (
                    <small
                      id="createProfileFor"
                      className="form-text text-danger"
                    >
                      Please specify whose profile is being created
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
                      value="male"
                      onChange={() => this.setState({ gender: 'male' })}
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
                      value="female"
                      onChange={() => this.setState({ gender: 'female' })}
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
