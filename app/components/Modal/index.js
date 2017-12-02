/**
 *
 * Modal
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import ReactTooltip from 'react-tooltip';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'react-responsive-modal/lib/react-responsive-modal.css';

// import CrossIcon from 'components/CrossIcon';
// import ModalWrapper from './ModalStyle';
import messages from './messages';
import './ModalStyle.scss';

class SignInModal extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="signin-modal">
        <div className="modal-content">
          <div className="layerlogo" />
          <h5 className="modal-title">
            <FormattedMessage {...messages.header} />
          </h5>
          <div className="modal-body">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="eamil">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="eamil"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
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
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" />
                    Stay Signed in &nbsp;
                  </label>
                  <i
                    data-tip
                    data-for="global"
                    className="fa fa-question-circle-o"
                    aria-hidden="true"
                  />
                  <NavLink
                    to="forgetpassword"
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
            <Link to="/signin" className="signin-btn">
              <button
                className="btn text-white waves-effect waves-light modal-action modal-close"
                type="submit"
                name="action"
              >
                Signin
              </button>
            </Link>
            <h6>New to Shaadidotcom?</h6>
            <div className="signup-free-btn text-center">
              <Link to="signup" className="modal-action modal-close">
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
  // isModalOpen: PropTypes.bool,
};

export default SignInModal;
