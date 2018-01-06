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
import WavesButton from 'components/WavesButton';


import messages from './messages';
import './style.scss';

class RightSidePartnerSearchContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="right-side-partner-search-container">
        <h5>{this.props.heading}</h5>
        {this.props.children}
        {/* <div className="row">
          <div className="col-6">
             <label>Age</label>
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
        </div> */}
        {/* <div className="row">
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
        </div> */}
        
        { this.props.btn && <div className="row">
          <div className="col-12 text-center">
            <WavesButton label="Search" />
          </div>
        </div>}

        { this.props.footer && <h5 className="right-side-partner-search-footer">
          <NavLink to="#">
            Profile Search{' '}
            <i className="fa fa-caret-right" aria-hidden="true" />
          </NavLink>
          <NavLink className="pull-right" to="#">
            More Option <i className="fa fa-caret-right" aria-hidden="true" />
          </NavLink>
        </h5>}
      </div>
    );
  }
}

RightSidePartnerSearchContainer.propTypes = {};

export default RightSidePartnerSearchContainer;
