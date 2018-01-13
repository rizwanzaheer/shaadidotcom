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
import axios from 'axios';
import { createStructuredSelector } from 'reselect';
import { NavLink } from 'react-router-dom';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'views/App/selectors';
import FormData from 'form-data';

import UploadImage from 'components/UploadImage';
import RightSidePartnerSearchContainer from 'components/RightSidePartnerSearchContainer';
import H2 from 'components/H2';
import ProfileCompactView from 'components/ProfileCompactView';
import ReposList from 'components/ReposList';
import ProfileComponent from 'components/ProfileComponent';

import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import image1 from '../../images/AAEAAQAAAAAAAA3gAAAAJGE4NTVhODJhLWRlMTQtNDBjMS1iZGMxLTBiNDk0MjZlMjZjNw.jpg';
import image2 from '../../images/AAEAAQAAAAAAAAcwAAAAJGUxYTQ1MDBlLWI5YzEtNDZlMi04MWI2LWZkMjg3MzJhODc0ZA.jpg';
import image3 from '../../images/AAEAAQAAAAAAAAd3AAAAJDAyZjEzNWJmLTE4OTgtNGFlYS05ZDAzLTllMzgzYjkwNzk3Mw.jpg';
import image4 from '../../images/AAEAAQAAAAAAAAluAAAAJDBjMDU3MjQ5LWJmNTktNGYzMC05NDYzLWM4NWRiNzQ4YmRiNA.jpg';
import image6 from '../../images/AAEAAQAAAAAAAAdnAAAAJDM3YWQwNzY1LWM2NTQtNGZlOS05MTQwLWNjNjdjMmRmZDA5Yg.jpg';
import image5 from '../../images/AAEAAQAAAAAAAAjzAAAAJGQ3NmNjMzUzLTM4MGMtNGEyMi04YTRiLTI5NzhhYjJmYzhlYQ.jpg';

import { loadRepos } from '../../views/App/actions';

import { changeUsername, imageChange } from './actions';
import { makeSelectUsername } from './selectors';
import { nodeApiServerUrl } from '../../config/envChecker';
import { USERDETAIL } from '../../config/getUserDetailFromLocalStorage';

import reducer from './reducer';
import saga from './saga';
import './style.scss';

export class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);
    this.state = {
      userId: USERDETAIL._id,
      fName: USERDETAIL.fname ? USERDETAIL.fname : 'Huddy',
      lName: USERDETAIL.lname ? USERDETAIL.lname : '',
    };
    this.profileData1 = {
      name: 'Hina khalid',
      age: 23,
      height: 5,
      weight: 0,
      religion: 'Islam',
      motherToungue: 'Urdu',
      profileId: this.state.userId,
      city: 'Islamabad, ',
      country: 'Pakistan',
      profileImg: image1,
    };
    this.profileData2 = {
      name: 'Maryam Nawaz',
      age: 23,
      height: 5,
      weight: 0,
      religion: 'Islam',
      motherToungue: 'Punjabi',
      profileId: this.state.userId,
      city: 'Islamabad, ',
      country: 'Pakistan',
      profileImg: image2,
    };
    this.profileData3 = {
      name: 'Saba Moin',
      age: 20,
      height: 6,
      weight: 0,
      religion: 'Islam',
      motherToungue: 'Punjabi',
      profileId: this.state.userId,
      city: 'Lahore, ',
      country: 'Pakistan',
      profileImg: image3,
    };
    this.profileData4 = {
      name: 'Kalsoom Bibi',
      age: 25,
      height: 5,
      weight: 0,
      religion: 'Islam',
      motherToungue: 'Sindhi',
      profileId: this.state.userId,
      city: 'karachi, ',
      country: 'Pakistan',
      profileImg: image4,
    };
    this.profileData5 = {
      name: 'Sana Saleem',
      age: 22,
      height: 5,
      weight: 0,
      religion: 'Islam',
      motherToungue: 'Urdu',
      profileId: this.state.userId,
      city: 'Islamabad, ',
      country: 'Pakistan',
      profileImg: image5,
    };
    this.profileData6 = {
      name: 'Ayesha Khalid',
      age: 24,
      height: 5,
      weight: 0,
      religion: 'Islam',
      motherToungue: 'Punjabi',
      profileId: this.state.userId,
      city: 'Multan, ',
      country: 'Pakistan',
      profileImg: image6,
    };
  }

  componentWillMount() {
    !USERDETAIL.fname ? window.location.href = '/my-shaadi/edit-profile' : '';
    
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
                    {/* Side profile container */}
                    <div className="col-12 col-md-12 col-lg-3 col-sm-12">
                      <ProfileComponent />
                    </div>
                    <div
                      className="col-12 col-md-12 col-lg-6 col-sm-12"
                      style={{ marginBottom: '20px' }}
                    >
                      <div className="new-match-container">
                        <h5>My Matches</h5>

                        {/* list of all user present in Db */}
                        {/* Single user call profilecompactive */}
                        <ProfileCompactView data={this.profileData1} />
                        <ProfileCompactView data={this.profileData2} />
                        <ProfileCompactView data={this.profileData3} />
                        <ProfileCompactView data={this.profileData4} />
                        <ProfileCompactView data={this.profileData5} />
                        <ProfileCompactView data={this.profileData6} />
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-3 col-sm-12">
                      <RightSidePartnerSearchContainer
                        heading="Partner Search"
                        footer
                        btn="Search"
                      >
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="formGroupExampleInput">
                                Name:
                              </label>
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
    imageChange,
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
