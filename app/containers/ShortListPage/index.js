/**
 *
 * ShortListPage
 *
 */

import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ProfileCompactView from 'components/ProfileCompactView';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { nodeApiServerUrl } from '../../config/envChecker';
import { USERDETAIL } from '../../config/getUserDetailFromLocalStorage';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import makeSelectShortListPage from './selectors';
import './ShortListPage.scss';

export class ShortListPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      shortlistUsers: [],
    };
  }

  componentWillMount() {
    try {
      axios
        .post(`${nodeApiServerUrl}/api/shortlist`, {
          id: USERDETAIL._id,
        })
        .then((users) => {
          console.log('users: ', users);
          this.setState({ shortlistUsers: users.data.user }, () =>
            console.log('this.state: ', this.state)
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { shortlistUsers } = this.state;
    return (
      <div className="container">
        <Helmet>
          <title>ShortListPage</title>
          <meta name="description" content="Description of ShortListPage" />
        </Helmet>
        <div className="row">
          <div className="col-12">
            <div className="shortlist-wrapper">
              <div className="shortlist-header">
                <h5>Shortlisted Members</h5>
              </div>
              <hr />
              {shortlistUsers.map((data) => (
                <div key={data._id}>
                  <ProfileCompactView data={data} />
                </div>
              ))}
              {shortlistUsers.length === 0 && (
                <div className="row">
                  <div className="col-12 text-center text-secondary">
                    <h1>You did not shortlisted any member!!!</h1>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ShortListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  shortlistpage: makeSelectShortListPage(),
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'shortListPage', reducer });
const withSaga = injectSaga({ key: 'shortListPage', saga });

export default compose(withReducer, withSaga, withConnect)(ShortListPage);
