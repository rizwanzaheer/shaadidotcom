import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import './footer.scss';

function Footer() {
  return (
    <footer className="page-footer">
      {/* <section>
      <FormattedMessage {...messages.licenseMessage} />
    </section>
    <section>
      <LocaleToggle />
    </section>
    <section>
      <FormattedMessage
        {...messages.authorMessage}
        values={{
          author: (
            <A href="https://twitter.com/rizwanzaheerr">Rizwan Zaheer</A>
          ),
        }}
      />
    </section> */}
      {/* <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="footer-copyright">
        <div className="container">
          © { new Date().getFullYear()} Copyright by Rizwan Zaheer
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
