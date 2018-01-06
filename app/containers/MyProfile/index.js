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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMyProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { nodeApiServerUrl } from '../../config/envChecker';

import './MyProfileContainerStyle.scss';

const USERDETAIL = JSON.parse(localStorage.getItem('user_detail'))
  ? JSON.parse(localStorage.getItem('user_detail'))
  : { _id: null };

export class MyProfile extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  // constructor(props) {
  //   super(props);
  // }
  // componentWillMount() {
  //   try {
  //     axios
  //       .post(`${nodeApiServerUrl}/api/getuserdetail`, {
  //         userId: USERDETAIL._id,
  //       })
  //       .then((data) => {
  //         console.log('USERDETAIL data: ', data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (error) {
  //     console.log('try catch error:', error);
  //   }
  // }
  render() {
    return (
      <div className="container my-profile-container">
        <Helmet>
          <title>MyProfile</title>
          <meta name="description" content="Description of MyProfile" />
        </Helmet>
        <div className="row">
          <div className="col-12">
            <h6 className="prof_username">
              {USERDETAIL.fname
                ? `${USERDETAIL.fname} ${USERDETAIL.lname}`
                : 'Huddy!'}
            </h6>
          </div>
        </div>
        <div className="row complete-profile-contianer">
          <div className="col-12 short-profile-container">
            <div className="profile-image-container">
              <img
                src={USERDETAIL.image}
                alt="image"
                className="img-thumbnail"
              />
            </div>
            <div className="basic-info-container">
              <ul>
                <li>age</li>
                <li>height</li>
                <li>religion</li>
                <li>Caste</li>
              </ul>
              <ul>
                <li>
                  :&nbsp;&nbsp;
                  {USERDETAIL.age ? USERDETAIL.age : 'N/A'}
                </li>
                <li>
                  :&nbsp;&nbsp;
                  {USERDETAIL.height ? USERDETAIL.height : 'N/A'}
                </li>
                <li>
                  :&nbsp;&nbsp;
                  {USERDETAIL.religion ? USERDETAIL.religion : 'N/A'}
                </li>
                <li>
                  :&nbsp;&nbsp;
                  {USERDETAIL.caste ? USERDETAIL.caste : 'N/A'}
                </li>
              </ul>
              <ul>
                <li>City</li>
                <li>country</li>
                <li>Mother tounge</li>
                <li>gender</li>
              </ul>
              <ul>
                <li>
                  :&nbsp;&nbsp;
                  {USERDETAIL.city ? USERDETAIL.city : 'N/A'}
                </li>
                <li>
                  :&nbsp;&nbsp;
                  {USERDETAIL.country ? USERDETAIL.country : 'N/A'}
                </li>
                <li>
                  :&nbsp;&nbsp;
                  {USERDETAIL.mother_tongue ? USERDETAIL.mother_tongue : 'N/A'}
                </li>
                <li>
                  :&nbsp;&nbsp;
                  {USERDETAIL.gender ? USERDETAIL.gender : 'N/A'}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <h5 className="about-my-self-heading">About Myself:</h5>
            <br />
            <h6 className="profile-descp-headings">Personality, Career etc</h6>
            <p>
              {USERDETAIL.about_my_self
                ? USERDETAIL.about_my_self
                : 'I am a good person thats it.'}
            </p>
            <hr />
          </div>
          <div className="col-12">
            <h6 className="profile-descp-headings">Detail Information:</h6>
            <hr />
            <div className="row">
              <div className="col-6">
                <p>
                  First Name : {USERDETAIL.fname ? USERDETAIL.fname : 'N/A'}
                </p>
                <p>Date of Birth : {USERDETAIL.dob ? USERDETAIL.dob : 'N/A'}</p>
                <p>Mother tounge : {USERDETAIL.mother_tongue ? USERDETAIL.mother_tongue : 'N/A'}</p>
                <p>
                  Marital Status : {USERDETAIL.status ? USERDETAIL.status : 'N/A'}
                </p>
                <p>Hight : {USERDETAIL.height ? USERDETAIL.height : 'N/A'}</p>
                <p>City : {USERDETAIL.city ? USERDETAIL.city : 'N/A'}</p>
                <p>
                  province : {USERDETAIL.province ? USERDETAIL.province : 'N/A'}
                </p>
              </div>
              <div className="col-6">
                <p>Last Name : {USERDETAIL.lname ? USERDETAIL.lname : 'N/A'}</p>
                <p>Gender : {USERDETAIL.gender ? USERDETAIL.gender : 'N/A'}</p>
                <p>religion : {USERDETAIL.religion ? USERDETAIL.religion : 'N/A'}</p>
                <p>
                  education :{' '}
                  {USERDETAIL.education ? USERDETAIL.education : 'N/A'}
                </p>
                <p>weight : {USERDETAIL.weight ? USERDETAIL.weight : 'N/A'}</p>
                <p>caste : {USERDETAIL.caste ? USERDETAIL.caste : 'N/A'}</p>
                <p>
                  country : {USERDETAIL.country ? USERDETAIL.country : 'N/A'}
                </p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-12">
            <h6 className="profile-descp-headings">My Contact Detail:</h6>
            <hr />
            <div className="row">
              <div className="col-6">
                <p>phone : {USERDETAIL.phone ? USERDETAIL.phone : 'N/A'}</p>
                <p style={{ textTransform: 'initial' }}>
                  Email : {USERDETAIL.email ? USERDETAIL.email : 'N/A'}
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
