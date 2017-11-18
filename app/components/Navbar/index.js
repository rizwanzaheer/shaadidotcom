/**
*
* Navbar
*
*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Logo from '../../images/favicon-32.png';
import './navbar.scss';

class Navbar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    //this.renderLinks = this.renderLinks.bind(this);
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
  }
  // renderLinks() {
  //   if (this.props.authenticated) {
  //     return (
  //       <li>
  //         <NavLink to="signout">
  //           <i className="fa fa-sign-out" aria-hidden="true" />
  //         </NavLink>
  //       </li>
  //     );
  //   }
  //   return [
  //     <li>
  //       <NavLink to="signin">
  //         <i className="fa fa-sign-in" aria-hidden="true" />
  //       </NavLink>
  //     </li>,
  //     <li>
  //       <NavLink to="signup">
  //         <i className="fa fa-sign-in" aria-hidden="true" />
  //       </NavLink>
  //     </li>,
  //   ];
  // }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <NavLink to="#" className="brand-logo">
              <img src={Logo} alt="Shaadi too karo" />
            </NavLink>
            <NavLink
              to="#"
              data-activates="mobile-demo"
              className="button-collapse right"
            >
              <i className="material-icons">menu</i>
            </NavLink>
            <ul className="right hide-on-med-and-down">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="features">Features</NavLink>
              </li>
              <li>
                <NavLink to="about">About us</NavLink>
              </li>
              {/* {this.renderLinks} */}
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="features">Features</NavLink>
              </li>
              <li>
                <NavLink to="about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="mobile.html">Mobile View</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {/* <FormattedMessage {...messages.header} /> */}
      </div>
    );
  }
}

Navbar.propTypes = {};
const mapStateToProps = (state) => ({
  // authenticated: state.auth.authenticated,
});
export default connect(mapStateToProps, null)(Navbar);
