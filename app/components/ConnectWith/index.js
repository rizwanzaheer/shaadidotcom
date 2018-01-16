/**
 *
 * ConnectWith
 *
 */

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';

import MoreDetailButtonRight from 'components/MoreDetailButtonRight';

import messages from './messages';
import './ConnectWithStyle.scss';

class ConnectWith extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="connect-with-her-wrapper">
        <h6>connect with:</h6>
        <button className="btn waves-effect waves-light">Yes</button>
        <button className="btn waves-effect waves-light">Maybe</button>
        <button className="btn waves-effect waves-light">No</button>
        <MoreDetailButtonRight label="View full profile" url="adfadf" />
      </div>
    );
  }
}

ConnectWith.propTypes = {};

export default ConnectWith;
