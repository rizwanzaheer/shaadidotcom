/**
 *
 * Input
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Input extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    // this.state = {
    //   input: this.props.value,
    // };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.props.inputChange(name, value);

    // this.setState({
    //   input: value,
    // });
  }
  render() {
    const { type, label, name, placeholder, value, id } = this.props;
    return (
      <div className="form-group">
        {label && <label htmlFor="eamil">{label}</label>}
        <input
          type={type}
          className="form-control"
          id={id}
          name={name}
          aria-describedby="email"
          placeholder={placeholder}
          value={value}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  inputChange: PropTypes.func,
};

export default Input;
