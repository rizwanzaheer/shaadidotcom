import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { isUser } from './constants';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
// import Nav from '../Navbar';
import logo from '../../images/shaadi-logo-v1.png';
import './header.scss';
import profileImg from '../../images/UNADJUSTEDNONRAW_thumb_1.jpg';

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isSignin: !!isUser,
    };
    this.signoutHandler = this.signoutHandler.bind(this);
    this.navbarToggler = this.navbarToggler.bind(this);
    this.signinHandler = this.signinHandler.bind(this);
  }
  signinHandler = () => {
    window.location.pathname = 'signin';
  };
  signoutHandler = () => {
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_detail');
    window.location.pathname = '';
  };
  navbarToggler = () => {
    if (isUser) {
      return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/my-shaadi"
              >
                {/* Home <span className="sr-only">(current)</span> */}
                <FormattedMessage {...messages.dashboard} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-shaadi/profile">
                <FormattedMessage {...messages.profile} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-shaadi/search">
                <FormattedMessage {...messages.search} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-shaadi/ttyrf">
                <FormattedMessage {...messages.partnerpreferences} />
              </NavLink>
            </li>
            {/* <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FormattedMessage {...messages.settings} />
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="#">
                  Action
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  Another action
                </NavLink>
                <div className="dropdown-divider" />
                <NavLink className="dropdown-item" to="#">
                  Something else here
                </NavLink>
              </div>
            </li> */}
          </ul>

          <div className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav m-auto">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link profile-menu-dropdwon dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src={profileImg} alt="Name" />
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/my-shaadi/setting">
                    Account Setting
                  </NavLink>
                  <NavLink className="dropdown-item" to="#">
                    Another action
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink
                    className="dropdown-item"
                    to="#"
                    onClick={this.signoutHandler}
                  >
                    Sign Out
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
          {/* <i
            className="fa fa-sign-out fa-2x pull-right signout"
            onClick={this.signoutHandler}
            aria-hidden="true"
          /> */}
        </div>
      );
    }
    return (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/signin">
              <FormattedMessage {...messages.signin} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/signup">
              <FormattedMessage {...messages.signup} />
            </NavLink>
          </li>
        </ul>
        <i
          className="fa fa-sign-in fa-2x pull-right signin"
          onClick={this.signinHandler}
          aria-hidden="true"
        />
      </div>
    );
  };
  render() {
    return (
      <NavBar className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink exact className="navbar-brand" to="/">
            <img
              className="pull-left site-logo"
              src={logo}
              alt="Shaadi dot com"
            />
          </NavLink>
          <button
            className="navbar-toggler sandwich-btn"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/*  conditional menu rendered */}
          {this.navbarToggler()}
        </nav>
      </NavBar>
    );
  }
}

export default Header;
