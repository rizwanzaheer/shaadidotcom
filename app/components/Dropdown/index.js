/**
 *
 * Dropdown
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';

import Label from './DropdownsStyle';

class Dropdown extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.logChange = this.logChange.bind(this);
    this.state = {
      selectedValue: props.defaultValue,
    };
  }

  logChange(val) {
    const newValue = val === null ? '' : val.value;
    if (newValue) {
      this.props.dropDownChangeHandler(val);
      this.setState({ selectedValue: newValue });
    } else {
      this.setState({ selectedValue: '' });
    }
  }
  render() {
    return (
      <div>
        <div style={{ margin: '5px' }}>
          <Label htmlFor={this.props.label}>{this.props.label}</Label>
        </div>
        <Select
          id={this.props.label}
          name="form-field-name"
          clearable
          value={this.state.selectedValue}
          options={this.props.options}
          onChange={this.logChange}
        />
      </div>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dropDownType: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dropDownChangeHandler: PropTypes.func,
};

export default Dropdown;
