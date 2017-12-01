/**
 *
 * Modal
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-responsive-modal';
import ReactTooltip from 'react-tooltip';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'react-responsive-modal/lib/react-responsive-modal.css';

import CrossIcon from 'components/CrossIcon';
import ModalWrapper from './ModalStyle';
import messages from './messages';
import './ModalStyle.scss';

class SignInModal extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    console.log(props.isModalOpen);
    this.state = {
      open: props.isModalOpen,
    };
    // this.onOpenModal = this.onOpenModal.bind(this);
    // this.onCloseModal = this.onCloseModal.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextState: ', nextState);
    console.log('nextProps: ', nextProps);
  }

  // onOpenModal() {
  //   this.setState({ open: this.props.isModalOpen });
  //   console.log('on open modal');
  // }

  // onCloseModal() {
  //   this.setState({ open: false });
  // }

  render() {
    console.log('render successfuly!', this.props.onCloseModal);
    const { open } = this.state;
    console.log('open: ', open);
    return (
      <div>
        {/* <Modal open={open} onClose={this.onCloseModal} little>
          <CrossIcon />
          <div className="modal-content">
            <div className="layerlogo" />
            <h5 className="modal-title">
              <FormattedMessage {...messages.header} />
            </h5>
            <div className="row">
              <div className="col s12">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label
                    htmlFor="email"
                    data-error="wrong"
                    data-success="right"
                  >
                    Email
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
            </div>
            <p className="stay-signedin">
              <input type="checkbox" className="filled-in" id="stay-signedin" />
              <label htmlFor="stay-signedin">
                Stay Signed in &nbsp;
                <i
                  data-tip
                  data-for="global"
                  className="fa fa-question-circle-o"
                  aria-hidden="true"
                />
              </label>
              <NavLink
                to="forgetpassword"
                className="forget-password right modal-action modal-close"
              >
                forget Password?
              </NavLink>
            </p>
            <ReactTooltip
              id="global"
              className="toolTipClass"
              aria-haspopup="true"
            >
              <p>We recommend that you do</p>
              <p>not use this if you are</p>
              <p>signing in from a shared computer? </p>
            </ReactTooltip>
            <Link to="/signin">
              <button
                className="btn waves-effect waves-light modal-action modal-close"
                type="submit"
                name="action"
              >
                Signin
              </button>
            </Link>
            <h6>New to Shaadidotcom?</h6>
            <div className="signup-free-btn">
              <Link to="signup" className="modal-action modal-close">
                Sign Up Free
              </Link>
            </div>
          </div> */}
        {/* <div className="modal-footer"> */}
        {/* <a
              href="#!"
              className="modal-action modal-close waves-effect waves-red btn-flat"
            >
              Agree
            </a> */}
        {/* </div> */}
        {/* </Modal> */}
        <Modal open={open} onClose={this.props.onCloseModal} little>
          <h2>Simple centered modal</h2>
        </Modal>
      </div>
    );
  }
}

SignInModal.propTypes = {
  // isModalOpen: PropTypes.bool,
};

export default SignInModal;
