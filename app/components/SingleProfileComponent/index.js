/**
 *
 * SingleProfileComponent
 *
 */

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import ConnectWith from 'components/ConnectWith';

import messages from './messages';

import image from '../../images/0c1ac4b49886e4a8ee5dad5164a9a5fa.jpg';

import './SingleProfileComponentStyle.scss';

class SingleProfileComponent extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="col-12 single-search-user-contaienr">
        <h6 className="search-user-tilte"> Rizwan Zaheer</h6>
        <div className="search-user-image">
          <img className="img-thumbnail" src={image} alt="image" />
        </div>
        <div className="search-user-detail-wrapper">
          <ul>
            <li>Age</li>
            <li>religion</li>
            <li>community</li>
            <li>Mother Tongue</li>
            <li>Location</li>
          </ul>
          <ul>
            <li>Age</li>
            <li>religion</li>
            <li>community</li>
            <li>Mother Tongue</li>
            <li>Location</li>
          </ul>
        </div>
        <ConnectWith />
      </div>
    );
  }
}

SingleProfileComponent.propTypes = {};

export default SingleProfileComponent;
