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
      fname,
      lname,
      age,
      height,
      weight,
      religion,
      motherTongue,
      _id,
      image,
      city,
      country,
    } = this.props.data;
    console.log('profile compact view data: ', this.props.data );
    return (
      <div className="profile_compact_view">
        <span className="thumbnail">
          <NavLink to={`/my-shaadi/finduser?profileId=${_id}`}>
            <div className="small-pic">
              <img src={image} alt="profileImg" />
            </div>
          </NavLink>
        </span>
        <span className="user_info">
          <p>
            <NavLink to={`/my-shaadi/finduser?profileId=${_id}`}>
              {fname}&nbsp;{lname}
            </NavLink>
          </p>
          <p>{`${age}, ${height}'', ${religion}, ${motherTongue}`}</p>
          <p>
            {city || "Islamabad"},
            &nbsp;
            {country || "United Arab Emirates"}
          </p>
          <NavLink to={`/my-shaadi/finduser?profileId=${_id}`}>
            full profile <i className="fa fa-caret-right" aria-hidden="true" />
          </NavLink>
        </span>
      </div>
    );
  }
}

ProfileCompactView.propTypes = {};

export default ProfileCompactView;
