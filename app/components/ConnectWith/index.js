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
  yesClickHandler = (_id) => {
    console.log('yes click: ', _id);
  };
  noClickHandler = (_id) => {
    console.log('no click', _id);
  };
  mayBeClickHandler = (_id) => {
    console.log('maybe click', _id);
  };
  render() {
    const { _id, gender } = this.props;
    return (
      <div className="connect-with-her-wrapper">
        <h6>Connect with {gender === 'Male' ? 'him' : 'her'}?</h6>
        <button
          onClick={() => this.yesClickHandler(_id)}
          className="btn waves-effect waves-light"
        >
          Yes
        </button>
        <button
          onClick={() => this.mayBeClickHandler(_id)}
          className="btn waves-effect waves-light"
        >
          Maybe
        </button>
        <button
          onClick={() => this.noClickHandler(_id)}
          className="btn waves-effect waves-light"
        >
          No
        </button>
        <MoreDetailButtonRight label="View profile" url={`finduser/${_id}`} />
      </div>
    );
  }
}

ConnectWith.propTypes = {};

export default ConnectWith;
