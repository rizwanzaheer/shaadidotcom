/**
 *
 * Backoffice
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import 'antd/lib/button/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/menu/style/css';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import makeSelectBackoffice from './selectors';


export class Backoffice extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Backoffice</title>
          <meta name="description" content="Description of Backoffice" />
        </Helmet>
        <h1>backoffice Dashboard</h1>
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
