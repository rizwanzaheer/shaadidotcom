import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import './footer.scss';

function Footer() {
  return (
    <Wrapper className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <section>
              <span> © {new Date().getFullYear()} Shaadidotcom, </span>
              <FormattedMessage {...messages.licenseMessage} />
            </section>
          </div>
          <div className="col-2">
            <section className="pull-right">
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
                      Rizwan
                    </A>
                  ),
                }}
              />
            </section>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
