/**
 *
 * EditProfileContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import axios from 'axios';

import ProfileComponent from 'components/ProfileComponent';
import Dropdown from 'components/Dropdown';
import Input from 'components/Input';
import WavesButton from 'components/WavesButton';
import SweetAlertPopup from 'components/SweetAlertPopup';

import makeSelectEditProfileContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { nodeApiServerUrl } from '../../config/envChecker';
import { USERDETAIL } from '../../config/getUserDetailFromLocalStorage';
import {
  MotherTongue,
  MatrialStatus,
  Community,
  Religion,
} from '../../config/dropDownListData';

import './EditProfileContainerStyle.scss';

export class EditProfileContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {};
    this.inputChange = this.inputChange.bind(this);
    // this.dropDownChangeHandler = this.dropDownChangeHandler.bind(this);
  }

  componentWillMount() {
    try {
      axios
        .post(`${nodeApiServerUrl}/api/getuserdetail`, {
          userId: USERDETAIL._id,
        })
        .then(({ data: { user }, status, statusText }) => {
          if (status === 200 && statusText === 'OK') {
            console.log(user);
            Object.entries(user).forEach(([key, value]) =>
              this.setState({ [key]: value })
            );
            console.log('this state: ', this.state);
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }
  inputChange(name, value) {
    this.setState({
      [name]: value,
    });
    console.log(`handle input change name: ${name}, value: ${value}`);
  }
  dropDownChangeHandler = ({ dropDownType, value }) => {
    this.setState({
      [dropDownType]: value,
    });
  };
  updateAndSaveHandler = () => {
    const {
      fname,
      email,
      lname,
      education,
      religion,
      about_my_self,
      blood_group,
      caste,
      dob,
      drink,
      height,
      mother_tongue,
      phone,
      province,
      smoke,
      status,
      weight,
      city,
      country,
    } = this.state;
    const updatedData = {
      fname,
      email,
      lname,
      education,
      religion,
      about_my_self,
      blood_group,
      caste,
      dob,
      drink,
      height,
      mother_tongue,
      phone,
      province,
      smoke,
      status,
      weight,
      city,
      country,
      userId: USERDETAIL._id,
    };
    try {
      axios
        .post(`${nodeApiServerUrl}/api/updateandsaveuser`, updatedData)
        .then(({ data, status, statusText }) => {
          console.log(data);
          if (status === 200 && statusText === 'OK') {
            SweetAlertPopup(
              'Success!',
              'Your data is update & save Successfuly!',
              'success'
            );
            // window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
          SweetAlertPopup('Oops...', 'Something went wrong!', 'error');
        });
    } catch (error) {
      console.error('catch error: ', error);
    }
  };

  render() {
    const {
      fname,
      email,
      lname,
      education,
      religion,
      about_my_self,
      blood_group,
      caste,
      dob,
      drink,
      height,
      mother_tongue,
      phone,
      province,
      smoke,
      status,
      weight,
      city,
      country,
    } = this.state;
    return (
      <div className="container">
        <Helmet>
          <title>EditProfileContainer</title>
          <meta
            name="description"
            content="Description of EditProfileContainer"
          />
        </Helmet>
        <div className="row edit-profile-container">
          <div className="col-12 col-md-12 col-lg-3 col-sm-12">
            <ProfileComponent />
          </div>
          <div className="col-12 col-md-12 col-lg-8 col-sm-12">
            <div className="edit-profile-wrapper">
              <form>
                <div className="row">
                  <div className="col-12">
                    <h3 className="edit-personal-profile-heading">
                      <FormattedMessage {...messages.header} />
                    </h3>
                  </div>
                </div>

                <Input
                  id="fname"
                  label="First Name"
                  placeholder="Enter update name"
                  value={fname}
                  name="fname"
                  type="text"
                  inputChange={this.inputChange}
                />

                <Input
                  id="lname"
                  label="Last Name"
                  placeholder="Enter update last name"
                  value={lname}
                  name="lname"
                  type="text"
                  inputChange={this.inputChange}
                />

                <div className="form-group">
                  <label htmlFor="fname">
                    Gender
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender1"
                      value="Male"
                      checked={this.state.gender === 'Male'}
                      onChange={() => this.setState({ gender: 'Male' })}
                    />
                    <label className="form-check-label" htmlFor="gender1">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender2"
                      value="Woman"
                      checked={this.state.gender === 'Woman'}
                      onChange={() => this.setState({ gender: 'Woman' })}
                    />
                    <label className="form-check-label" htmlFor="gender2">
                      Female
                    </label>
                  </div>
                </div>

                <Input
                  id="email"
                  label="Email"
                  placeholder="Enter update email"
                  value={email}
                  name="email"
                  type="email"
                  inputChange={this.inputChange}
                />
                <Input
                  id="education"
                  label="Education"
                  placeholder="Enter Education"
                  value={education}
                  name="education"
                  type="text"
                  inputChange={this.inputChange}
                />
                <Input
                  id="dob"
                  label="Date of Birth"
                  placeholder="Enter Date of birth"
                  value={dob}
                  name="dob"
                  type="date"
                  inputChange={this.inputChange}
                />
                <div className="form-group">
                  <Dropdown
                    label="Status"
                    dropDownChangeHandler={this.dropDownChangeHandler}
                    options={MatrialStatus}
                    defaultValue={status}
                    dropDownType={status}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="smoke">
                    Smoke
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="smoke"
                      id="smoke1"
                      value="yes"
                      checked={this.state.smoke === 'yes'}
                      onChange={() => this.setState({ smoke: 'yes' })}
                    />
                    <label className="form-check-label" htmlFor="smoke1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="smoke"
                      id="smoke2"
                      value="no"
                      checked={this.state.smoke === 'no'}
                      onChange={() => this.setState({ smoke: 'no' })}
                    />
                    <label className="form-check-label" htmlFor="smoke2">
                      No
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <Dropdown
                    dropDownChangeHandler={this.dropDownChangeHandler}
                    options={Community}
                    defaultValue={caste}
                    dropDownType={caste}
                    label="Caste"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="drink">
                    Drink
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="drink"
                      id="drink1"
                      value="yes"
                      checked={this.state.drink === 'yes'}
                      onChange={() => this.setState({ drink: 'yes' })}
                    />
                    <label className="form-check-label" htmlFor="drink1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="drink"
                      id="drink2"
                      value="no"
                      checked={this.state.drink === 'no'}
                      onChange={() => this.setState({ drink: 'no' })}
                    />
                    <label className="form-check-label" htmlFor="drink2">
                      No
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <Dropdown
                    label="Religion"
                    dropDownChangeHandler={this.dropDownChangeHandler}
                    options={Religion}
                    defaultValue={religion}
                    dropDownType={religion}
                  />
                </div>

                <Input
                  id="city"
                  label="City"
                  placeholder="Enter city"
                  value={city}
                  name="city"
                  type="text"
                  inputChange={this.inputChange}
                />
                <Input
                  id="country"
                  label="Country"
                  placeholder="Enter country"
                  value={country}
                  name="country"
                  type="text"
                  inputChange={this.inputChange}
                />

                <Input
                  id="phone"
                  label="Phone"
                  placeholder="Enter phone"
                  value={phone}
                  name="phone"
                  type="text"
                  inputChange={this.inputChange}
                />

                <div className="form-group">
                  <Dropdown
                    label={'Mother Tongue'}
                    dropDownChangeHandler={this.dropDownChangeHandler}
                    options={MotherTongue}
                    defaultValue={mother_tongue}
                    dropDownType={mother_tongue}
                  />
                </div>

                <Input
                  id="province"
                  label="Province"
                  placeholder="Enter province"
                  value={province}
                  name="province"
                  type="text"
                  inputChange={this.inputChange}
                />

                <Input
                  id="height"
                  label="Height"
                  placeholder="Enter height"
                  value={height}
                  name="height"
                  type="text"
                  inputChange={this.inputChange}
                />
                <Input
                  id="weight"
                  label="Weight"
                  placeholder="Enter weight"
                  value={weight}
                  name="weight"
                  type="text"
                  inputChange={this.inputChange}
                />
                <Input
                  id="blood_group"
                  label="Blood Group"
                  placeholder="Enter blood group"
                  value={blood_group}
                  name="blood_group"
                  type="text"
                  inputChange={this.inputChange}
                />
                <Input
                  id="about_my_self"
                  label="About Myself"
                  placeholder="about you self"
                  value={about_my_self}
                  name="about_my_self"
                  type="text"
                  inputChange={this.inputChange}
                />
                <div className="row">
                  <div className="col-6" />
                  <div className="col-6">
                    <WavesButton
                      label={'Save & Update'}
                      clickHandler={(e) => this.updateAndSaveHandler(e)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditProfileContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editprofilecontainer: makeSelectEditProfileContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'editProfileContainer', reducer });
const withSaga = injectSaga({ key: 'editProfileContainer', saga });

export default compose(withReducer, withSaga, withConnect)(
  EditProfileContainer
);
