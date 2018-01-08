/**
 *
 * WavesButton
 *
 */

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './Style.scss';

class WavesButton extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <button
        className="btn lets-begin-btn btn-block waves-effect waves-light"
        onClick={(e) => {
          e.preventDefault();
          this.props.clickHandler(e);
          console.log('search btn click');
        }}
      >
        {this.props.label}{' '}
        <i className="fa fa-caret-right" aria-hidden="true" />
      </button>
    );
  }
}

WavesButton.propTypes = {};

export default WavesButton;
