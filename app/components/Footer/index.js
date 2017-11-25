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
      <div className="container">
        <div className="row">
          <div className="col-4">
            <section>
              <span> © 2016 - {new Date().getFullYear()} Shaadidotcom,</span>
              <FormattedMessage {...messages.licenseMessage} />
            </section>
          </div>
          <div className="col-4">
            <section>
              <LocaleToggle />
            </section>
          </div>
          <div className="col-4">
            <section className="pull-right">
              <FormattedMessage
                {...messages.authorMessage}
                values={{
                  author: (
                    <A href="https://twitter.com/rizwanzaheerr">
                      Rizwan Zaheer
                    </A>
                  ),
                }}
              />
            </section>
          </div>
        </div>
      </div>
      {/* <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright by Rizwan Zaheer
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
       <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright by Rizwan Zaheer
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
