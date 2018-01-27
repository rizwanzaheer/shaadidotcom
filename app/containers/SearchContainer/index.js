/**
 *
 * SearchContainer
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Dropdown from 'components/Dropdown';
import Input from 'components/Input';
import MoreDetailButtonRight from 'components/MoreDetailButtonRight';
import RightSidePartnerSearchContainer from 'components/RightSidePartnerSearchContainer';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  BloodGroup,
  BodyType,
  Community,
  FamilyAffluence,
  HairType,
  MatrialStatus,
  MotherTongue,
  Religion,
  SkinTone,
  ageOfDropDown,
} from '../../config/dropDownListData';
// import Input from '../HomePage/Input';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import './SearchContainer.scss';

import makeSelectSearchContainer from './selectors';

export class SearchContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      gender: 'Female',
      fromAge: 20,
      toAge: 25,
      religion: 'Muslim',
      motherTongue: 'Urdu',
      community: 'Malik',
      status: 'Single',
      skinTone: 'Fair',
      bloodGroup: 'A+',
      bodyType: 'Average',
      hairType: 'Brown Straight long',
      familyAffluence: 'Middle class',
      drink: 'yes',
      smoke: 'yes',
      searchByName: '',
      height: '5.2',
    };
    this.dropDownChangeHandler = this.dropDownChangeHandler.bind(this);
    this.linkCreation = this.linkCreation.bind(this);
    this.reset = this.reset.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }
  inputChange(name, value) {
    this.setState({
      [name]: value,
    });
    console.log(`handle input change name: ${name}, value: ${value}`);
  }

  dropDownChangeHandler({ dropDownType, value }) {
    console.log(`dropDownType: ${dropDownType}, value: ${value}`);
    this.setState(
      {
        [dropDownType]: value,
      },
      () => console.log('this.state:', this.state)
    );
  }
  linkCreation() {
    const {
      gender,
      fromAge,
      toAge,
      religion,
      motherTongue,
      community,
      status,
      skinTone,
      bloodGroup,
      bodyType,
      hairType,
      familyAffluence,
      drink,
      smoke,
      height,
    } = this.state;
    this.props.history.push(
      `searchusers?gender=${gender}&fromage=${fromAge}&toage=${toAge}&matrialStatus=${status}&religion=${religion}&mothertongue=${motherTongue}&community=${community}&skintone=${skinTone}&bodytype=${bodyType}&hairtype=${hairType}&familyaffluence=${familyAffluence}&drink=${drink}&smoke=${smoke}&height=${height}&bloodgroup=${bloodGroup}
      `
    );
  }
  reset() {
    this.setState({
      gender: 'Female',
      fromAge: 20,
      toAge: 25,
      religion: 'Muslim',
      motherTongue: 'Urdu',
      community: 'Malik',
      status: 'Single',
      skinTone: 'Fair',
      bloodGroup: 'A+',
      bodyType: 'Average',
      hairType: 'Brown Straight long',
      familyAffluence: 'Middle class',
      drink: 'yes',
      smoke: 'yes',
      height: '',
      searchByName: '',
    });
  }
  clickHandler = () => {
    // console.log('clickHandler is working!!!!');
    const { searchByName } = this.state;
    this.props.history.push(`searchusers?fname=${searchByName}`);
  };
  render() {
    const {
      fromAge,
      toAge,
      community,
      gender,
      motherTongue,
      religion,
      status,
      skinTone,
      familyAffluence,
      bloodGroup,
      hairType,
      bodyType,
      drink,
      height,
      smoke,
    } = this.state;
    return (
      <div className="container advanced-search-wrapper">
        <Helmet>
          <title>Search Bride/Groom</title>
          <meta name="description" content="Description of SearchContainer" />
        </Helmet>
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="advanced-search-container">
              <div className="row">
                <div className="col-12">
                  <h3 className="adcanced-search-heading">Advanced Search</h3>
                </div>
              </div>
              <div className="row single-entity">
                <div className="col-4">Looking For</div>
                <div className="col-8">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="bride"
                      value="Female"
                      checked={gender === 'Female'}
                      onChange={() => this.setState({ gender: 'Female' })}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Bride (F)
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="groom"
                      value="Male"
                      checked={gender === 'Male'}
                      onChange={() => this.setState({ gender: 'Male' })}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Groom (M)
                    </label>
                  </div>
                </div>
              </div>

              <div className="row form-group single-entity">
                <div className="col-4">Age</div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-5">
                      <Dropdown
                        options={ageOfDropDown[0].options}
                        defaultValue={fromAge}
                        dropDownChangeHandler={this.dropDownChangeHandler}
                      />
                    </div>
                    <div className="col-1">to</div>
                    <div className="col-5">
                      <Dropdown
                        options={ageOfDropDown[1].options}
                        defaultValue={toAge}
                        dropDownChangeHandler={this.dropDownChangeHandler}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-4 col-form-label"
                >
                  Height
                </label>
                <div className="col-sm-7">
                  <Input
                    id="fname"
                    label=""
                    placeholder="Enter hight"
                    value={height}
                    name="height"
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
                  Marital Status
                </label>
                <div className="col-sm-7">
                  <Dropdown
                    dropDownChangeHandler={this.dropDownChangeHandler}
                    options={MatrialStatus}
                    defaultValue={status}
                    dropDownType={status}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-4 col-form-label"
                >
                  Skin Tone
                </label>
                <div className="col-sm-7">
                  <Dropdown
                    dropDownChangeHandler={this.dropDownChangeHandler}
                    options={SkinTone}
                    defaultValue={skinTone}
                    dropDownType={skinTone}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-4 col-form-label"
                >
                  Body Type
                </label>
                <div className="col-sm-7">
                  <Dropdown
                    dropDownChangeHandler={this.dropDownChangeHandler}
                    options={BodyType}
                    defaultValue={bodyType}
                    dropDownType={bodyType}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-4 col-form-label"
                >
                  Hair Type
                </label>
                <div className="col-sm-7">
                  <Dropdown
                    dropDownChangeHandler={this.dropDownChangeHandler}
                    options={HairType}
                    defaultValue={hairType}
                    dropDownType={hairType}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-4 col-form-label"
                >
                  Family Affluence
                </label>
                <div className="col-sm-7">
                  <Dropdown
                    dropDownChangeHandler={this.dropDownChangeHandler}
                    options={FamilyAffluence}
                    defaultValue={familyAffluence}
                    dropDownType={familyAffluence}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-4 col-form-label"
                >
                  Blood Group
                </label>
                <div className="col-sm-7">
                  <Dropdown
                    dropDownChangeHandler={this.dropDownChangeHandler}
                    options={BloodGroup}
                    defaultValue={bloodGroup}
                    dropDownType={bloodGroup}
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
                  <div className="form-group">
                    <Dropdown
                      dropDownChangeHandler={this.dropDownChangeHandler}
                      options={Religion}
                      defaultValue={religion}
                      dropDownType={religion}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-4 col-form-label"
                >
                  Community
                </label>
                <div className="col-sm-7">
                  <Dropdown
                    dropDownChangeHandler={this.dropDownChangeHandler}
                    options={Community}
                    defaultValue={community}
                    dropDownType={community}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-4 col-form-label"
                >
                  Mother Tongue
                </label>
                <div className="col-sm-7">
                  <Dropdown
                    dropDownChangeHandler={this.dropDownChangeHandler}
                    options={MotherTongue}
                    defaultValue={motherTongue}
                    dropDownType={motherTongue}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="drink">
                  Drink
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="drink"
                    id="drink1"
                    value="yes"
                    checked={drink === 'yes'}
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
                    checked={drink === 'no'}
                    onChange={() => this.setState({ drink: 'no' })}
                  />
                  <label className="form-check-label" htmlFor="drink2">
                    No
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="smoke">
                  Smoke
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="smoke"
                    id="smoke1"
                    value="yes"
                    checked={smoke === 'yes'}
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
                    checked={smoke === 'no'}
                    onChange={() => this.setState({ smoke: 'no' })}
                  />
                  <label className="form-check-label" htmlFor="smoke2">
                    No
                  </label>
                </div>
              </div>

              <div className="row text-center">
                <div className="col-12">
                  <span
                    className="advanced-search-btn"
                    onClick={this.linkCreation}
                  >
                    <MoreDetailButtonRight label="Search" url="#" />
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span onClick={this.reset}>
                    <MoreDetailButtonRight label="Reset" url="#" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <RightSidePartnerSearchContainer
              heading="Search By Name"
              footer={false}
              btn="Search"
              clickHandler={this.clickHandler}
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">First Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="First name"
                      onChange={(e) =>
                        this.setState({ searchByName: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </RightSidePartnerSearchContainer>
          </div>
        </div>
      </div>
    );
  }
}

SearchContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  searchcontainer: makeSelectSearchContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchContainer', reducer });
const withSaga = injectSaga({ key: 'searchContainer', saga });

export default withRouter(
  compose(withReducer, withSaga, withConnect)(SearchContainer)
);
