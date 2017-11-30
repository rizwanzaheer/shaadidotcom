/**
 *
 * Searchbar
 *
 */

import React from 'react';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Dropdown from 'components/Dropdown';
import { connect } from 'react-redux';
import { listOfDropDown } from './SearchbarData';
import messages from './messages';
import './SearchbarStyle.scss';

class Searchbar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      gender: 'Woman',
      fromAge: 20,
      toAge: 25,
      religion: 'Muslim',
      motherTongue: 'Urdu',
    };
    this.letsBeginBtnClickHandler = this.letsBeginBtnClickHandler.bind(this);
    this.dropDownChangeHandler = this.dropDownChangeHandler.bind(this);
  }
  dropDownChangeHandler({ dropDownType, value }) {
    this.setState({
      [dropDownType]: value,
    });
  }
  letsBeginBtnClickHandler() {
    // Send Axios API Resqeust request to backend server
    const { gender, fromAge, toAge, religion, motherTongue } = this.state;
    this.props.history.push(
      `testhome?gender=${gender}&fromage=${fromAge}&toage=${toAge}&religion=${
        religion
      }&mothertongue=${motherTongue}`
    );
  }
  render() {
    const { gender, fromAge, toAge, religion, motherTongue } = this.state;
    return (
      <div className="container searchbar-wrapper">
        <div className="row align-items-end">
          <div className="col-6 col-sm-6 col-md-6 col-lg-3">
            <Dropdown
              dropDownChangeHandler={this.dropDownChangeHandler}
              options={listOfDropDown[0].options}
              label={listOfDropDown[0].label}
              defaultValue={gender}
              dropDownType={gender}
            />
          </div>
          <div className="col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="row align-items-end">
              <div className="col-5 col-sm-5">
                <Dropdown
                  dropDownChangeHandler={this.dropDownChangeHandler}
                  options={listOfDropDown[1].options}
                  label={listOfDropDown[1].label}
                  defaultValue={fromAge}
                  dropDownType={fromAge}
                />
              </div>
              <div className="col-2 col-sm-2">
                <p className="mb-1">to</p>
              </div>
              <div className="col-5 col-sm-5">
                <Dropdown
                  dropDownChangeHandler={this.dropDownChangeHandler}
                  options={listOfDropDown[2].options}
                  label={listOfDropDown[2].label}
                  defaultValue={toAge}
                  dropDownType={toAge}
                />
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2">
            <Dropdown
              dropDownChangeHandler={this.dropDownChangeHandler}
              options={listOfDropDown[3].options}
              label={listOfDropDown[3].label}
              defaultValue={religion}
              dropDownType={religion}
            />
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2">
            <Dropdown
              dropDownChangeHandler={this.dropDownChangeHandler}
              options={listOfDropDown[4].options}
              label={listOfDropDown[4].label}
              defaultValue={motherTongue}
              dropDownType={motherTongue}
            />
          </div>
          <div className="col-sm-12 col-12 col-md-4 col-lg-2">
            <button
              type="button"
              onClick={this.letsBeginBtnClickHandler}
              id="lets-begin-btn"
              className="btn lets-begin-btn btn-block waves-effect waves-light"
            >
              <FormattedMessage {...messages.letsBeginBtn} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Searchbar.propTypes = {};
export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) =>
      dispatch(this.letsBeginBtnClickHandler(evt.target.value)),
    // onSubmitForm: (evt) => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // },
  };
}
const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  // username: makeSelectUsername(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});
export default withRouter(connect(mapStateToProps, null)(Searchbar));
