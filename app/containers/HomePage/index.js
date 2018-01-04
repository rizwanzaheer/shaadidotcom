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

import FileUpload from 'components/FileUpload';
import RightSidePartnerSearchContainer from 'components/RightSidePartnerSearchContainer';
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
      files: [],
      accepted: [],
      rejected: [],
      file: '',
      imagePreviewUrl: '',
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
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
    setTimeout(() => {
      axios
        .post(`${nodeApiServerUrl}/api/upload`, {
          userId: this.state.userId,
          imageUrl: this.state.imagePreviewUrl,
        })
        .then((data) => {
          localStorage.removeItem('user_detail');
          setTimeout(() => {
            localStorage.setItem('user_detail', JSON.stringify(data.new_user_detail));
          }, 1000);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
    // console.log('imagePreviewUrl: ', this.state.imagePreviewUrl);
  }
  render() {
    const { fName, lName, imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="" />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }
    const profileImageUrl = USERDETAIl.image ? USERDETAIl.image : 'testdf';
    console.log(profileImageUrl);
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
                    </div>
                    <div className="col-6">
                      <div className="new-match-container">
                        <h5>My Matches</h5>
                        <div className="previewComponent">
                          <form onSubmit={(e) => this.handleSubmit(e)}>
                            <input
                              className="fileInput"
                              type="file"
                              onChange={(e) => this.handleImageChange(e)}
                            />
                            <button
                              className="submitButton"
                              type="submit"
                              onClick={(e) => this.handleSubmit(e)}
                            >
                              Upload Image
                            </button>
                          </form>
                          <div className="imgPreview">{$imagePreview}</div>
                        </div>
                        {/* <form encType="multipart/form-data">
                          <input type="file" method="post" />
                          <button type="submit" onClick={this.testUpload}>
                            submit
                          </button>
                        </form> */}
                        {/* <div className="dropzone"> */}
                        {/* <FileUpload /> */}
                        {/* </div> */}
                        {/* <aside>
                          <h2>Dropped files</h2>
                          <ul>
                            {this.state.files.map((f) => (
                              <li key={f.name}>
                                {f.name} - {f.size} bytes
                              </li>
                            ))}
                          </ul>
                        </aside> */}
                        {/* <button
                          onClick={() => {
                            console.log(this.state);
                          }}
                        >
                          click to check
                        </button> */}
                        <ProfileCompactView data={this.profileData} />
                        <ProfileCompactView data={this.profileData} />
                        <ProfileCompactView data={this.profileData} />
                        <ProfileCompactView data={this.profileData} />
                        <ProfileCompactView data={this.profileData} />
                        <ProfileCompactView data={this.profileData} />
                        <ProfileCompactView data={this.profileData} />
                        <ProfileCompactView data={this.profileData} />
                        {/* <ProfileCompactView data={this.profileData} /> */}
                      </div>
                    </div>
                    {/* <div className="right-side-partner-search-container">
                      <h5>Partner Search</h5>
                      <div className="age">
                        age
                      </div>
                      <h5 className="right-side-partner-search-footer">
                        <NavLink to="#">
                          Profile Search{' '}
                          <i className="fa fa-caret-right" aria-hidden="true" />
                        </NavLink>
                        <NavLink className="pull-right" to="#">
                          More Option{' '}
                          <i className="fa fa-caret-right" aria-hidden="true" />
                        </NavLink>
                      </h5>
                    </div> */}
                    {/* <RightSidePartnerSearchContainer /> */}
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
