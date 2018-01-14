/**
 *
 * MyProfile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import axios from 'axios';
import getAge from 'get-age';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import MoreDetailButtonRight from 'components/MoreDetailButtonRight';

import makeSelectMyProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import { nodeApiServerUrl } from '../../config/envChecker';
import { USERDETAIL } from '../../config/getUserDetailFromLocalStorage';

import './MyProfileContainerStyle.scss';

// const USERDETAIL = JSON.parse(localStorage.getItem('user_detail'))
//   ? JSON.parse(localStorage.getItem('user_detail'))
//   : { _id: null };

export class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      email: '',
      lname: '',
      education: '',
      religion: '',
      aboutMySelf: '',
      bloodGroup: '',
      community: '',
      dob: '',
      drink: '',
      height: '',
      motherTongue: '',
      phone: '',
      province: '',
      smoke: '',
      status: '',
      gender: '',
      weight: '',
      city: '',
      age: 0,
      country: '',
      image: '',
      partnerPreferences: {},
    };
  }
  componentWillMount() {
    try {
      axios
        .post(`${nodeApiServerUrl}/api/getdetails`, {
          userId: USERDETAIL._id,
        })
        .then(({ data, status, statusText }) => {
          console.log("my profile data: ", data);
          if (status === 200 && statusText === 'OK') {
            Object.entries(data.user).forEach(([key, value]) => {
              this.setState({ [key]: value });
            });
            this.setState({
              ...this.state,
              partnerPreferences: data.partnerPreferences,
            }, () => {
              console.log('this state: ', this.state);
            });
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      fname,
      email,
      lname,
      education,
      religion,
      aboutMySelf,
      bloodGroup,
      age,
      community,
      dob,
      drink,
      height,
      motherTongue,
      phone,
      province,
      smoke,
      status,
      gender,
      weight,
      city,
      country,
      image,
      partnerPreferences
    } = this.state;
    return (
      <div className="container my-profile-container">
        <Helmet>
          <title>MyProfile</title>
          <meta name="description" content="Description of MyProfile" />
        </Helmet>
        <div className="row">
          <div className="col-12">
            <h3 className="prof_username">
              {fname ? `${fname} ${lname}` : 'Huddy!'}
            </h3>
          </div>
        </div>
        <div className="row complete-profile-contianer">
          <div className="col-12 short-profile-container">
            <div className="profile-image-container">
              <img src={image} alt="image" className="img-thumbnail" />
            </div>
            <div className="basic-info-container">
              <ul>
                <li>age</li>
                <li>religion</li>
                <li>community</li>
              </ul>
              <ul>
                <li>
                  :&nbsp;&nbsp;
                  {age || getAge(dob) || 'N/A' }
                </li>
                <li>
                  :&nbsp;&nbsp;
                  {religion || 'N/A'}
                </li>
                <li>
                  :&nbsp;&nbsp;
                  {community || 'N/A'}
                </li>
              </ul>
              <ul>
                <li>gender</li>
                <li>Mother tounge</li>
                <li>City</li>
              </ul>
              <ul>
                <li>
                  :&nbsp;&nbsp;
                  {gender || 'N/A'}
                </li>
                <li>
                  :&nbsp;&nbsp;
                  {motherTongue || 'N/A'}
                </li>
                <li>
                  :&nbsp;&nbsp;
                  {city || 'N/A'}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <h5 className="about-my-self-heading">About Myself:</h5>
            <br />
            <h6 className="profile-descp-headings">Personality, Career etc</h6>
            <p>{aboutMySelf || 'I am a good person thats it.'}</p>
            <hr />
          </div>
          <div className="col-12">
            <h6 className="profile-descp-headings">
              Detail Information:
              <span className="pull-right">
                <MoreDetailButtonRight label="Edit" url="edit-profile" />
              </span>
            </h6>
            <hr />
            <div className="row">
              <div className="col-6">
                <p>First Name : {fname || 'N/A'}</p>
                <p>Date of Birth : {dob || 'N/A'}</p>
                <p>Mother tounge : {motherTongue || 'N/A'}</p>
                <p>Marital Status : {status || 'N/A'}</p>
                <p>Hight : {height || 'N/A'}</p>
                <p>Smoke : {smoke || 'N/A'}</p>
                <p>Blood group : {bloodGroup || 'N/A'}</p>
                <p>City : {city || 'N/A'}</p>
                <p>country : {country || 'N/A'}</p>
              </div>
              <div className="col-6">
                <p>Last Name : {lname || 'N/A'}</p>
                <p>Gender : {gender || 'N/A'}</p>
                <p>religion : {religion || 'N/A'}</p>
                <p>education : {education || 'N/A'}</p>
                <p>weight : {weight || 'N/A'}</p>
                <p>drink : {drink || 'N/A'}</p>
                <p>community : {community || 'N/A'}</p>
                <p>province : {province || 'N/A'}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-12">
            <h6 className="profile-descp-headings">
              Partner Preference:
              <span className="pull-right">
                <MoreDetailButtonRight label="Edit" url="edit-preferences" />
              </span>
            </h6>
            <hr />
            <div className="row">
              <div className="col-6">
                <p>Mother tounge : {partnerPreferences.motherTongue || 'N/A'}</p>
                <p>Marital Status : {partnerPreferences.status || 'N/A'}</p>
                <p>Hight : {partnerPreferences.height || 'N/A'}</p>
                <p>City : {partnerPreferences.city || 'N/A'}</p>
                {/* <p>country : {partnerPreferences.country || 'N/A'}</p> */}
                <p>body Type : {partnerPreferences.bodyType || 'N/A'}</p>
                <p>skinTone : {partnerPreferences.skinTone || 'N/A'}</p>
                {/* <p>province : {partnerPreferences.province || 'N/A'}</p> */}
              </div>
              <div className="col-6">
                <p>religion : {partnerPreferences.religion || 'N/A'}</p>
                {/* <p>education : {partnerPreferences.education || 'N/A'}</p> */}
                {/* <p>weight : {partnerPreferences.weight || 'N/A'}</p> */}
                <p>community : {partnerPreferences.community || 'N/A'}</p>
                <p>hair type : {partnerPreferences.hairType || 'N/A'}</p>
                <p>family Affluence : {partnerPreferences.familyAffluence || 'N/A'}</p>
                <p>drink : {partnerPreferences.drink || 'N/A'}</p>
                
              </div>
            </div>
            <hr />
          </div>
          <div className="col-12">
            <h6 className="profile-descp-headings">My Contact Detail:</h6>
            <hr />
            <div className="row">
              <div className="col-6">
                <p>phone : {phone || 'N/A'}</p>
                <p style={{ textTransform: 'initial' }}>
                  Email : {email || 'N/A'}
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

MyProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myprofile: makeSelectMyProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'myProfile', reducer });
const withSaga = injectSaga({ key: 'myProfile', saga });

export default compose(withReducer, withSaga, withConnect)(MyProfile);
