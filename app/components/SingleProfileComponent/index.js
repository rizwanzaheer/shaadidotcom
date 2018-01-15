/**
 *
 * SingleProfileComponent
 *
 */

import React from "react";
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import MoreDetailButtonRight from 'components/MoreDetailButtonRight';
import messages from "./messages";
import image from "../../images/0c1ac4b49886e4a8ee5dad5164a9a5fa.jpg";

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
        <div className="connect-with-her-wrapper">
          <h6>connect with:</h6>
          <button className="btn waves-effect waves-light">Yes</button>
          <button className="btn waves-effect waves-light">Maybe</button>
          <button className="btn waves-effect waves-light">No</button>
          <MoreDetailButtonRight label="View full profile" url="adfadf" />
        </div>
      </div>
    );
  }
}

SingleProfileComponent.propTypes = {};

export default SingleProfileComponent;
