/**
 *
 * SearchUsers
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
import makeSelectSearchUsers from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class SearchUsers extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>SearchUsers</title>
          <meta name="description" content="Description of SearchUsers" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

SearchUsers.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  searchusers: makeSelectSearchUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchUsers', reducer });
const withSaga = injectSaga({ key: 'searchUsers', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchUsers);
