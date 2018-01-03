/**
 *
 * ProfileCompactView
 *
 */

import React from 'react';
// import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import profileImg from '../../images/UNADJUSTEDNONRAW_thumb_1.jpg';
import './style.scss';

class ProfileCompactView extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    // const { } = this.props;
    return (
      <div className="profile_compact_view">
        <span className="thumbnail">
          <NavLink to="#">
            <div className="small-pic">
              <img src={profileImg} alt="profileImg" />
            </div>
          </NavLink>
        </span>
        <span className="user_info">
          <p>
            <NavLink to="#">Sana</NavLink>
          </p>
          <p>25, 5' 2", Muslim, Sunni, Urdu</p>
          <p>Not working, Abu Dhabi, United Arab Emirates</p>
          <NavLink to="#">
            full profile{' '}
            <i className="fa fa-caret-right" aria-hidden="true" />
          </NavLink>
        </span>
      </div>
    );
  }
}

ProfileCompactView.propTypes = {};

export default ProfileCompactView;
