import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Nav from '../Navbar';
import './header.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar className="header">
          <HeaderLink className="btn hoverable" to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink className="btn hoverable" to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
        <Nav />
      </div>
    );
  }
}

export default Header;
