/**
 *
 * Backoffice
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectBackoffice from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class Backoffice extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Backoffice</title>
          <meta name="description" content="Description of Backoffice" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Backoffice.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  backoffice: makeSelectBackoffice(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'backoffice', reducer });
const withSaga = injectSaga({ key: 'backoffice', saga });

export default compose(withReducer, withSaga, withConnect)(Backoffice);
