/**
 *
 * MyProfile
 *
 */

import axios from 'axios';
import getAge from 'get-age';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import MoreDetailButtonRight from 'components/MoreDetailButtonRight';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { newUsers } from '../../config/dropDownListData';
import { nodeApiServerUrl } from '../../config/envChecker';
import { USERDETAIL } from '../../config/getUserDetailFromLocalStorage';
import femaleAvator from '../../images/femaleAvator.gif';
import MaleAvator from '../../images/MaleAvator.gif';
import './MyProfileContainerStyle.scss';
import reducer from './reducer';
import saga from './saga';
import makeSelectMyProfile from './selectors';

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
          if (status === 200 && statusText === 'OK') {
            Object.entries(data.user).forEach(([key, value]) => {
              this.setState({ [key]: value });
            });
            this.setState(
              {
                ...this.state,
                partnerPreferences: data.partnerPreferences,
              }
            );
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    // insert user record in db on fly
    // try {
    //   // axios.post(`${nodeApiServerUrl}/api/getdetails`, {
    //   // });
    //   // Object.entries(newUsers).forEach((key, value) => {
    //   //   console.log('key is: ', [key]);
    //   //   console.log('value is: ', value);
    //   //   return true;
    //   // });
    //   newUsers.map((item, key) => {
    //     console.log('email is: ', item.email);
    //     console.log('bodyType is: ', item.bodyType);
    //     console.log('community is: ', item.community);
    //     console.log('dob is: ', item.dob);
    //     console.log('drink is: ', item.drink);
    //     console.log('familyAffluence is: ', item.familyAffluence);
    //     console.log('fname is: ', item.fname);
    //     console.log('gender is: ', item.gender);
    //     console.log('hairType is: ', item.hairType);
    //     console.log('height is: ', item.height);
    //     console.log('lname is: ', item.lname);
    //     console.log('motherTongue is: ', item.motherTongue);
    //     console.log('password is: ', item.password);
    //     console.log('religion is: ', item.religion);
    //     console.log('skinTone is: ', item.skinTone);
    //     console.log('education is: ', item.education);
    //     console.log('smoke is: ', item.smoke);
    //     console.log('status is: ', item.status);
    //     console.log('weight is: ', item.weight);
    //     console.log('bloodGroup is: ', item.bloodGroup);
    //     console.log('phone is: ', item.phone);
    //     axios.post(`${nodeApiServerUrl}/testing`, {
    //       email: `${item.fname}${item.lname}${key}@gmail.com`,
    //       bodyType: item.bodyType,
    //       community: item.community,
    //       dob: item.dob,
    //       drink: item.drink,
    //       familyAffluence: item.familyAffluence,
    //       fname: item.fname,
    //       gender: item.gender,
    //       hairType: item.hairType,
    //       height: item.height,
    //       lname: item.lname,
    //       motherTongue: item.motherTongue,
    //       password: item.password,
    //       religion: item.religion,
    //       skinTone: item.skinTone,
    //       smoke: item.smoke,
    //       education: item.education,
    //       status: item.status,
    //       weight: item.weight,
    //       phone: item.phone,
    //       bloodGroup: item.bloodGroup,
    //     });
    //   });
    // } catch (error) {
    //   console.log('trycatch error: ', error);
    // }
  }

  render() {
    const {
      fname,
      annualIncome,
      email,
      lname,
      education,
      religion,
      aboutMySelf,
      bloodGroup,
      sport,
      ethenic,
      movieGenre,
      star,
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
      familyAffluence,
      image,
      partnerPreferences,
    } = this.state;
    const avator = gender === 'Male' ? MaleAvator : femaleAvator;
    const newImage = image || avator;
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
              <img src={newImage} alt="image" className="img-thumbnail" />
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
                  {`${age} y` || `${getAge(dob)} y` || 'N/A'}
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
                <p>
                  Date of Birth : {moment(dob).format('DD/MM/YYYY') || 'N/A'}
                </p>
                <p>Mother tounge : {motherTongue || 'N/A'}</p>
                <p>Marital Status : {status || 'N/A'}</p>
                <p>Hight : {`${height}''` || 'N/A'}</p>
                <p>Smoke : {smoke || 'N/A'}</p>
                <p>family Affluence : {familyAffluence || 'N/A'}</p>
                <p>Blood group : {bloodGroup || 'N/A'}</p>
                <p>movie Genre : {movieGenre || 'N/A'}</p>
                <p>Annual Income : {`${annualIncome || 0} k` || 'N/A'}</p>
                <p>City : {city || 'N/A'}</p>
                <p>country : {country || 'N/A'}</p>
              </div>
              <div className="col-6">
                <p>Last Name : {lname || 'N/A'}</p>
                <p>star : {star || 'N/A'}</p>
                <p>Gender : {gender || 'N/A'}</p>
                <p>ethenic : {ethenic || 'N/A'}</p>
                <p>weight : {`${weight} kg` || 'N/A'}</p>
                <p>religion : {religion || 'N/A'}</p>
                <p>education : {education || 'N/A'}</p>
                
                <p>drink : {drink || 'N/A'}</p>
                <p>sport : {sport || 'N/A'}</p>
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
                {/* <p>from Age : {`${partnerPreferences.fromAge} y` || 'N/A'}</p> */}
                <p>
                  Mother tounge : {partnerPreferences.motherTongue || 'N/A'}
                </p>
                <p>Marital Status : {partnerPreferences.status || 'N/A'}</p>
                <p>Hight : {`${partnerPreferences.height}''` || 'N/A'}</p>
                <p>weight : {`${partnerPreferences.weight}kg` || 'N/A'}</p>
                {/* <p>City : {partnerPreferences.city || 'N/A'}</p> */}
                {/* <p>country : {partnerPreferences.country || 'N/A'}</p> */}
                <p>body Type : {partnerPreferences.bodyType || 'N/A'}</p>
                <p>skinTone : {partnerPreferences.skinTone || 'N/A'}</p>
                <p>sport : {partnerPreferences.sport || 'N/A'}</p>
                <p>Smoke : {partnerPreferences.smoke || 'N/A'}</p>
                <p>ethenic : {partnerPreferences.ethenic || 'N/A'}</p>
                {/* <p>province : {partnerPreferences.province || 'N/A'}</p> */}
              </div>
              <div className="col-6">
                {/* <p>To age : {`${partnerPreferences.toAge} y` || 'N/A'}</p> */}
                <p>religion : {partnerPreferences.religion || 'N/A'}</p>
                {/* <p>education : {partnerPreferences.education || 'N/A'}</p> */}
                {/* <p>weight : {partnerPreferences.weight || 'N/A'}</p> */}
                <p>community : {partnerPreferences.community || 'N/A'}</p>
                <p>hair type : {partnerPreferences.hairType || 'N/A'}</p>
                <p>star : {partnerPreferences.star || 'N/A'}</p>
                <p>movie Genre : {partnerPreferences.movieGenre || 'N/A'}</p>
                <p>
                  family Affluence :{' '}
                  {partnerPreferences.familyAffluence || 'N/A'}
                </p>
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
