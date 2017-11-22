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
      selectedValue: '',
    };
  }

  logChange(val) {
    console.log('Selected: ', val);
    const newValue = val === null ? '' : val.value;
    this.setState({
      selectedValue: newValue,
    });
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
};

export default Dropdown;
