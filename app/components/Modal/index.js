/**
 *
 * Modal
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import ReactTooltip from 'react-tooltip';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import 'react-responsive-modal/lib/react-responsive-modal.css';

import EnvChecker from '../../config/envChecker';
import messages from './messages';
import './ModalStyle.scss';

class SignInModal extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isEmailValid: false,
      isPasswordValid: false,
      hasEmail: false,
      hasPassword: false,
      notValidUser: false,
      error: false,
    };
    this.signinbtnClickHandler = this.signinbtnClickHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      isEmailValid: false,
      isPasswordValid: false,
      hasEmail: false,
      hasPassword: false,
      notValidUser: false,
      error: false,
      [name]: value,
    });
  }
  signinbtnClickHandler() {
    const { email, password } = this.state;
    if (!email && !password) {
      this.setState({
        error: true,
      });
    } else if (!email) {
      this.setState({
        hasEmail: true,
      });
    } else if (!password) {
      this.setState({
        hasPassword: true,
      });
    } else {
      axios
        .post(`${EnvChecker.nodeApiServerUrl}/signin`, this.state)
        .then((response) => {
          const { status, statusText, data } = response;
          if (status === 200 && statusText === 'OK') {
            localStorage.setItem('user_token', data.token);
            localStorage.setItem('user_detail', JSON.stringify(data.user_detail));
            window.location.pathname = 'my-shaadi';
          }
        })
        .catch((error) => {
          const { status, statusText, data } = error.response;
          if (status === 401 && statusText === 'Unauthorized') {
            this.setState({
              notValidUser: true,
            });
          }
          console.log('catch', error.response);
          console.log('status code: ', status);
          console.log('status text: ', statusText);
        });
    }
  }
  render() {
    return (
      <div className="signin-modal">
        {/* {this.state.isOpenForgetPasswordModal && <ForgetPasswordModal />} */}
        <div className="modal-content">
          <div className="layerlogo" />
          <h5 className="modal-title">
            <FormattedMessage {...messages.header} />
          </h5>
          {this.state.error && (
            <h6 className="text-danger">Please enter Email & Password!</h6>
          )}
          {this.state.hasEmail && (
            <h6 className="text-danger">Please enter Email!</h6>
          )}
          {this.state.hasPassword && (
            <h6 className="text-danger">Please enter Password!</h6>
          )}
          {this.state.notValidUser && (
            <h6 className="text-danger">
              Your Details does not Exist in our Record!
            </h6>
          )}
          <div className="modal-body">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="eamil">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="eamil"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={this.handleInputChange}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Well never share your email with anyone else.
                  </small>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      id="stay-signind"
                      className="form-check-input"
                    />
                    Stay Signed in &nbsp;
                  </label>
                  <i
                    data-tip
                    data-for="global"
                    className="fa fa-question-circle-o"
                    aria-hidden="true"
                  />
                  <NavLink
                    to="#"
                    onClick={this.props.forgetPasswordClickHandler}
                    className="forget-password pull-right modal-action modal-close"
                  >
                    forget Password?
                  </NavLink>
                </div>
              </div>
            </div>
            <ReactTooltip
              id="global"
              className="toolTipClass"
              aria-haspopup="true"
            >
              <p>We recommend that you do</p>
              <p>not use this if you are</p>
              <p>signing in from a shared computer? </p>
            </ReactTooltip>
            <Link to="#" className="signin-btn">
              <button
                className="btn text-white waves-effect waves-light modal-action modal-close"
                type="button"
                // name="action"
                onClick={this.signinbtnClickHandler}
              >
                Signin
              </button>
            </Link>
            <h6>New to Shaadidotcom?</h6>
            <div className="signup-free-btn text-center">
              <Link
                to="#"
                onClick={this.props.signupClickHandler}
                className="modal-action modal-close"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignInModal.propTypes = {
  signupClickHandler: PropTypes.func,
  forgetPasswordClickHandler: PropTypes.func,
};

export default withRouter(connect()(SignInModal));
