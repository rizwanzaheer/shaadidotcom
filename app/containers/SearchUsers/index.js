/**
 *
 * SearchUsers
 *
 */

import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import axios from 'axios';

import ProfileCompactView from 'components/ProfileCompactView';
import SingleProfileComponent from 'components/SingleProfileComponent';

import RightSidePartnerSearchContainer from 'components/RightSidePartnerSearchContainer';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSearchUsers from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { nodeApiServerUrl } from '../../config/envChecker';

import './SearchUsersStyle.scss';

export class SearchUsers extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.profileData = {
      fname: 'Rizwan',
      age: 23,
      height: 5,
      weight: 0,
      religion: 'Islam',
      motherToungue: 'Urdu',
      _id: 1,
    };
  }

  componentWillMount() {
    console.log('this.props: ', this.props.location.search);
    const query = new URLSearchParams(this.props.history.location.search);
    const gender = query.get('gender');
    const fromage = query.get('fromageadfad');
    const toage = query.get('toage');
    const religion = query.get('religion');
    const mothertongue = query.get('mothertongue');
    console.log('gender: ', gender);
    console.log('gender: ', fromage);
    console.log('gender: ', toage);
    console.log('gender: ', religion);
    console.log('gender: ', mothertongue);
    axios
      .post(`${nodeApiServerUrl}/api/getallusers`, {})
      .then((users) => {
        this.setState(
          {
            users: users.data.users,
          },
          () => {
            console.log('final state: ', this.state.users);
            this.state.users.map((data) => console.log('data is: ', data));
          }
        );
      })
      .catch((err) => console.log(err));
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>SearchUsers</title>
          <meta name="description" content="Description of SearchUsers" />
        </Helmet>
        <div className="row search-users-container">
          <div className="col-4">
            <RightSidePartnerSearchContainer
              heading="Refine Search"
              footer
              btn="Search"
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Name"
                    />
                  </div>
                </div>
              </div>
            </RightSidePartnerSearchContainer>
          </div>
          <div className="col-8">
            <h4>Your Search Result</h4>

            <div className="row search-users-wrapper">
              {this.state.users.map((data) => (
                <div className="row" key={data._id}>
                  <SingleProfileComponent />
                </div>
              ))}
            </div>
          </div>
        </div>
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

export default withRouter(
  compose(withReducer, withSaga, withConnect)(SearchUsers)
);
