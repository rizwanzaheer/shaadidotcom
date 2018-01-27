/**
 *
 * ProfileComponent
 *
 */

import React from 'react';
// import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import femaleAvator from '../../images/femaleAvator.gif';
import MaleAvator from '../../images/MaleAvator.gif';

import './ProfileComponentStyle.scss';

const USERDETAIL = JSON.parse(localStorage.getItem('user_detail'))
  ? JSON.parse(localStorage.getItem('user_detail'))
  : { _id: null };

class ProfileComponent extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      userId: USERDETAIL._id,
      profileImageUrl: USERDETAIL.image,
    };
  }
  render() {
    const { profileImageUrl } = this.state;
    const avator = USERDETAIL.gender === 'Male' ? MaleAvator : femaleAvator;
    const newImage = profileImageUrl || avator;

    return (
      <div className="profile-container">
        <img src={newImage} alt="huddy" className="img-thumbnail" />
        <ul>
          <li>
            <NavLink to="/my-shaadi/edit-profile"> Edit Profile </NavLink>
          </li>
          <li>
            <NavLink to="/my-shaadi/edit-preferences">
              Edit Preferences
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-shaadi/setting"> Settings </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

ProfileComponent.propTypes = {};

export default ProfileComponent;
