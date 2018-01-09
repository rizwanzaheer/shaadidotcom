/**
 *
 * EditPreferences
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ProfileComponent from 'components/ProfileComponent';
import ReactRangeSlider from 'components/ReactRangeSlider';
import Input from 'components/Input';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEditPreferences from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import {
  MatrialStatus,
  Religion,
  MotherTongue,
  Community,
} from '../../config/dropDownListData';

import './EditPreferencesStyle.scss';

export class EditPreferences extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      fromAge: 20,
      toAge: 24,
    };
  }

  AgeChangeHandler = (value) => {
    this.setState({
      fromAge: value[0],
      toAge: value[0],
    });
    console.log('AgeChangeHandler: ', value);
    console.log('AgeChangeHandler state: ', this.state);
  };
  render() {
    const { fromAge, toAge } = this.state;
    return (
      <div className="container">
        <Helmet>
          <title>EditPreferences</title>
          <meta name="description" content="Description of EditPreferences" />
        </Helmet>
        <div className="row edit-preferences-container">
          <div className="col-12 col-md-12 col-lg-3 col-sm-12">
            <ProfileComponent />
          </div>
          <div className="col-12 col-md-12 col-lg-8 col-sm-12">
            <div className="edit-preferences-wrapper">
              <form>
                <div className="row">
                  <div className="col-12">
                    <h5 className="edit-preferences-profile-heading">
                      <FormattedMessage {...messages.header} />
                    </h5>
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-4 col-form-label"
                  >
                    Age
                  </label>
                  <div className="col-sm-7">
                    <ReactRangeSlider
                      min={18}
                      max={28}
                      defaultValue={[fromAge, toAge]}
                      onChange={this.AgeChangeHandler}
                      label1={'From 18 years'}
                      label2={'To 28 years'}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-4 col-form-label"
                  >
                    Marital Status
                  </label>
                  <div className="col-sm-7">
                    <Input
                      id="fname"
                      // label="First Name"
                      placeholder="Enter update name"
                      // value={'fname'}
                      name="fname"
                      type="text"
                      inputChange={this.inputChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-4 col-form-label"
                  >
                    Religion
                  </label>
                  <div className="col-sm-7">
                    <Input
                      id="fname"
                      // label="First Name"
                      placeholder="Enter update name"
                      // value={'fname'}
                      name="fname"
                      type="text"
                      inputChange={this.inputChange}
                    />
                  </div>
                </div>

                {/*
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
              </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditPreferences.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editpreferences: makeSelectEditPreferences(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'editPreferences', reducer });
const withSaga = injectSaga({ key: 'editPreferences', saga });

export default compose(withReducer, withSaga, withConnect)(EditPreferences);
