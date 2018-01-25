/**
 *
 * SearchUsers
 *
 */

import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ProfileCompactView from 'components/ProfileCompactView';
import RightSidePartnerSearchContainer from 'components/RightSidePartnerSearchContainer';
import SingleProfileComponent from 'components/SingleProfileComponent';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { nodeApiServerUrl } from '../../config/envChecker';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import './SearchUsersStyle.scss';

import makeSelectSearchUsers from './selectors';

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
    const fromage = query.get('fromage');
    const toage = query.get('toage');
    const religion = query.get('religion');
    const mothertongue = query.get('mothertongue');
    const matrialStatus = query.get('matrialStatus');
    const community = query.get('community');
    const skintone = query.get('skintone');
    const bodytype = query.get('bodytype');
    const hairtype = query.get('hairtype');
    const familyaffluence = query.get('familyaffluence');
    const drink = query.get('drink');
    const smoke = query.get('smoke');
    const height = query.get('height');
    const bloodgroup = query.get('bloodgroup');
    console.log('gender: ', gender);
    console.log('gender: ', fromage);
    console.log('gender: ', toage);
    console.log('gender: ', religion);
    console.log('gender: ', mothertongue);
    console.log('gender: ', matrialStatus);
    console.log('gender: ', community);
    console.log('gender: ', skintone);
    console.log('gender: ', bodytype);
    console.log('gender: ', hairtype);
    console.log('gender: ', familyaffluence);
    console.log('gender: ', drink);
    console.log('gender: ', bloodgroup);
    console.log('gender: ', smoke);
    console.log('gender: ', height);
    axios
      .post(`${nodeApiServerUrl}/api/search/getusersbysearchcriteria`, {
        gender,
        fromage,
        toage,
        religion,
        mothertongue,
        matrialStatus,
        community,
        skintone,
        bodytype,
        hairtype,
        familyaffluence,
        drink,
        smoke,
        height,
        bloodgroup,
      })
      .then((users) => {
        console.log('users: ', users);
        this.setState(
          {
            users: users.data.users,
          },
          () => {
            console.log('final state: ', this.state.users);
            // this.state.users.map((data) => console.log('data is: ', data));
          }
        );
      })
      .catch((err) => console.log(err));
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    const { users } = this.state;
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
              {users.map((data) => (
                <div className="row" key={data._id}>
                  <SingleProfileComponent data={data} />
                </div>
              ))}
              {users.length === 0 && (
                <h1>
                  Didn't find any User accroding to your Search Criteria!!!{' '}
                </h1>
              )}
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
