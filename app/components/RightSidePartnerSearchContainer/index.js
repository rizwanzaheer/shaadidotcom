/**
 *
 * RightSidePartnerSearchContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';

import { FormattedMessage } from 'react-intl';
import Dropdown from 'components/Dropdown';

import messages from './messages';
import './style.scss';

class RightSidePartnerSearchContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="right-side-partner-search-container">
        <h5>Partner Search</h5>
        <div className="row">
          <div className="col-6">
            {/* <label>Age</label> */}
            <Dropdown label="Age" />
          </div>
          <div className="col-6">
            <label>to</label>
            <Select
              id="age-id"
              name="form-field-name"
              clearable
              // value={this.state.selectedValue}
              // options={this.props.options}
              // onChange={this.logChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label>Age</label>
            <Select
              id="age-id"
              name="form-field-name"
              clearable
              // value={this.state.selectedValue}
              // options={this.props.options}
              // onChange={this.logChange}
            />
          </div>
          <div className="col-6">
            <label>to</label>
            <Select
              id="age-id"
              name="form-field-name"
              clearable
              // value={this.state.selectedValue}
              // options={this.props.options}
              // onChange={this.logChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label>Age</label>
            <Select
              id="age-id"
              name="form-field-name"
              clearable
              // value={this.state.selectedValue}
              // options={this.props.options}
              // onChange={this.logChange}
            />
          </div>
          <div className="col-6">
            <label>to</label>
            <Select
              id="age-id"
              name="form-field-name"
              clearable
              // value={this.state.selectedValue}
              // options={this.props.options}
              // onChange={this.logChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label>Age</label>
            <Select
              id="age-id"
              name="form-field-name"
              clearable
              // value={this.state.selectedValue}
              // options={this.props.options}
              // onChange={this.logChange}
            />
          </div>
          <div className="col-6">
            <label>to</label>
            <Select
              id="age-id"
              name="form-field-name"
              clearable
              // value={this.state.selectedValue}
              // options={this.props.options}
              // onChange={this.logChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label>Age</label>
            <Select
              id="age-id"
              name="form-field-name"
              clearable
              // value={this.state.selectedValue}
              // options={this.props.options}
              // onChange={this.logChange}
            />
          </div>
          <div className="col-6">
            <label>to</label>
            <Select
              id="age-id"
              name="form-field-name"
              clearable
              // value={this.state.selectedValue}
              // options={this.props.options}
              // onChange={this.logChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <button
              className="btn lets-begin-btn btn-block waves-effect waves-light search-btn"
              onClick={() => {
                console.log('search btn click');
              }}
            >
              Search <i className="fa fa-caret-right" aria-hidden="true" />
            </button>
          </div>
        </div>
        <h5 className="right-side-partner-search-footer">
          <NavLink to="#">
            Profile Search{' '}
            <i className="fa fa-caret-right" aria-hidden="true" />
          </NavLink>
          <NavLink className="pull-right" to="#">
            More Option <i className="fa fa-caret-right" aria-hidden="true" />
          </NavLink>
        </h5>
      </div>
    );
  }
}

RightSidePartnerSearchContainer.propTypes = {};

export default RightSidePartnerSearchContainer;
