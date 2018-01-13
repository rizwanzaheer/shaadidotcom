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
import Dropdown from 'components/Dropdown';
import WavesButton from 'components/WavesButton';

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
      community: 'Malik',
      motherTongue: 'Punjabi',
      religion: 'Muslim',
      status: 'Divorced',
    };
  }
  dropDownChangeHandler = ({ dropDownType, value }) => {
    this.setState(
      {
        [dropDownType]: value,
      },
      () => console.log('this.state: ', this.state)
    );
  };
  AgeChangeHandler = (value) => {
    this.setState({
      fromAge: value[0],
      toAge: value[0],
    });
    // console.log('AgeChangeHandler: ', value);
    // console.log('AgeChangeHandler state: ', this.state);
  };
  render() {
    const {
      fromAge,
      toAge,
      community,
      motherTongue,
      religion,
      status,
    } = this.state;
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

                <div className="row save-and-update">
                  <WavesButton label="Save & update" />
                </div>
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
