/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { axios } from 'axios';
import { createStructuredSelector } from 'reselect';
import { NavLink } from 'react-router-dom';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'views/App/selectors';
import H2 from 'components/H2';
import ProfileCompactView from 'components/ProfileCompactView';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../../views/App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import { nodeApiServerUrl } from '../../config/envChecker';
import reducer from './reducer';
import saga from './saga';
import './style.scss';
import profileImg from '../../images/UNADJUSTEDNONRAW_thumb_1.jpg';

const USERDETAIl = JSON.parse(localStorage.getItem('user_detail'));
console.log(USERDETAIl);
console.log(USERDETAIl._id);
export class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);
    this.state = {
      userId: USERDETAIl._id,
      fName: USERDETAIl.fname ? USERDETAIl.fname : 'Huddy',
      lName: USERDETAIl.lname ? USERDETAIl.lname : '',
    };
    this.profileData = {
      name: 'Rizwan',
      age: 23,
      height: 5,
      weight: 0,
      religion: 'Islam',
      motherToungue: 'Urdu',
      profileId: this.state.userId,
    };
  }

  componentWillMount() {
    // axios.post(`${nodeApiServerUrl}/get-user-detail`, {
    //   user_token: localStorage.getItem('user_token'),
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  componentDidMount() {
    // if (this.props.username && this.props.username.trim().length > 0) {
    //   this.props.onSubmitForm();
    // }
  }

  render() {
    const { fName, lName } = this.state;
    return (
      <article className="home-page-container">
        <Helmet>
          <title>User Dashboard</title>
          <meta name="description" content="A User dashboard App" />
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <h5 className="welcome-message">
                    Hello, {fName} {lName}!
                  </h5>
                  <div className="row">
                    <div className="profile-container">
                      <img
                        src={profileImg}
                        alt="Rizwan Zaheer"
                        className="img-thumbnail"
                      />
                      <ul>
                        <li>
                          <NavLink to="/my-shaadi/edit-profile">
                            {' '}
                            Edit Profile{' '}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/my-shaadi/edit-preferences">
                            {' '}
                            Edit Preferences{' '}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/my-shaadi/setting"> Setting </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <div className="new-match-container">
                        <h5>My Matches</h5>
                        <ProfileCompactView data={this.profileData} />
                        <ProfileCompactView data={this.profileData} />
                        <ProfileCompactView data={this.profileData} />
                        <ProfileCompactView data={this.profileData} />
                        <ProfileCompactView data={this.profileData} />
                        <ProfileCompactView data={this.profileData} />
                        <ProfileCompactView data={this.profileData} />
                        <ProfileCompactView data={this.profileData} />
                        <ProfileCompactView data={this.profileData} />
                      </div>
                    </div>
                    <div className="partner-search-container">
                      <h5>Partner Search</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  // onSubmitForm: PropTypes.func,
  // username: PropTypes.string,
  // onChangeUsername: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    // onSubmitForm: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // }
  };
}

const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  // username: makeSelectUsername(),
  // loading: makeSelectLoading(),
  // error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
