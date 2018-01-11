/**
 *
 * FindUser
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

import ImageThumbnail from 'components/ImageThumbnail';

import makeSelectFindUser from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import test from '../../images/205368bd105f9357032bdc11f0ca4424.jpg';

export class FindUser extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>FindUser</title>
          <meta name="description" content="Description of FindUser" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <div className="row">
          <div className="col-lg-4">
            <FormattedMessage {...messages.header} />
            <ImageThumbnail image={test} name="test" />
          </div>
          <div className="col-lg-8">
            <FormattedMessage {...messages.header} />

          </div>
        </div>
      </div>
    );
  }
}

FindUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  finduser: makeSelectFindUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'findUser', reducer });
const withSaga = injectSaga({ key: 'findUser', saga });

export default compose(withReducer, withSaga, withConnect)(FindUser);
