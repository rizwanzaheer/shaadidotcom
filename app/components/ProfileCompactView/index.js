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
    const {
      name,
      age,
      height,
      weight,
      religion,
      motherToungue,
      profileId,
    } = this.props.data;
    return (
      <div className="profile_compact_view">
        <span className="thumbnail">
          <NavLink to={`/my-shaadi/finduser?profileId=${profileId}`}>
            <div className="small-pic">
              <img src={profileImg} alt="profileImg" />
            </div>
          </NavLink>
        </span>
        <span className="user_info">
          <p>
            <NavLink to={`/my-shaadi/finduser?profileId=${profileId}`}>{name}</NavLink>
          </p>
          <p>
            {`${age}, ${height}' 2'', ${religion}, ${motherToungue}`}
          </p>
          <p>Not working, Abu Dhabi, United Arab Emirates</p>
          <NavLink to={`/my-shaadi/finduser?profileId=${profileId}`}>
            full profile <i className="fa fa-caret-right" aria-hidden="true" />
          </NavLink>
        </span>
      </div>
    );
  }
}

ProfileCompactView.propTypes = {};

export default ProfileCompactView;
