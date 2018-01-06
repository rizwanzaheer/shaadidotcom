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

import { loadRepos } from '../../views/App/actions';

import { changeUsername, imageChange } from './actions';
import { makeSelectUsername } from './selectors';
import { nodeApiServerUrl } from '../../config/envChecker';

import reducer from './reducer';
import saga from './saga';
import './style.scss';

const USERDETAIL = JSON.parse(localStorage.getItem('user_detail'))
  ? JSON.parse(localStorage.getItem('user_detail'))
  : { _id: null };
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

  // onDrop(files) {
  // let file = new FormData();
  // file.append('name', files[0]);
  // let req = request.post(`${nodeApiServerUrl}/api/upload`).send(file);
  // req.end((err, response) => {
  //   console.log('upload done!!!!!');
  // });
  // const form = new FormData();
  // files.forEach((file) => {
  //   form.append(file.name, file);
  // });
  // form.append('foo', 'bar');
  // console.log('working');
  // axios.post(`${nodeApiServerUrl}/api/upload`, form)
  //   .then((success) => {
  //     console.log('success :', success);
  //   })
  //   .catch((err) => {
  //     console.log('error: ', err);
  //   });
  // this.setState(
  //   {
  //     files,
  //   },
  //   () => {
  //     console.log(this.state);
  //   }
  // );
  // }
  handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('working');
    const { userId, imagePreviewUrl } = this.state;
    // this.props.imageChange(userId, imagePreviewUrl);
    !imagePreviewUrl
      ? ''
      : axios
          .post(`${nodeApiServerUrl}/api/upload`, {
            userId,
            imageUrl: imagePreviewUrl,
          })
          .then(({ data }) => {
            localStorage.setItem(
              'user_detail',
              JSON.stringify(data.new_user_detail)
            );
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
  }
  render() {
    const { fName, lName, userId } = this.state;
    // let $imagePreview = null;
    // if (imagePreviewUrl) {
    //   $imagePreview = <img src={imagePreviewUrl} alt="" />;
    // } else {
    //   $imagePreview = (
    //     <div className="previewText">Please select an Image for Preview</div>
    //   );
    // }
    const profileImageUrl = USERDETAIL.image ? USERDETAIL.image : 'testdf';
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
                    {/* <div className="profile-container">
                      <img
                        src={profileImageUrl}
                        alt="huddy"
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
                    </div> */}
                    {/* Side profile container */}
                    <ProfileComponent />

                    <div className="col-6" style={{ marginBottom: '20px' }}>
                      <div className="new-match-container">
                        <h5>My Matches</h5>

                        {/* <UploadImage userId={userId} /> */}

                        {/* list of all user present in Db */}
                        {/* Single user call profilecompactive */}
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
                    <RightSidePartnerSearchContainer />
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
