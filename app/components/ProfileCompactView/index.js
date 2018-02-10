/**
 *
 * ProfileCompactView
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import femaleAvator from '../../images/femaleAvator.gif';
import MaleAvator from '../../images/MaleAvator.gif';
import './style.scss';


class ProfileCompactView extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      fname,
      lname,
      age,
      height,
      religion,
      weight,
      motherTongue,
      _id,
      image,
      city,
      annualIncome,
      gender,
      country,
    } = this.props.data;
    const avator = gender === 'Male' ? MaleAvator : femaleAvator;
    const newImage = image || avator;
    return (
      <div className="profile_compact_view">
        <span className="thumbnail">
          <NavLink to={`/my-shaadi/finduser/${_id}`}>
            <div className="small-pic">
              <img src={newImage} alt="profileImg" />
            </div>
          </NavLink>
        </span>
        <span className="user_info">
          <p>
            <NavLink to={`/my-shaadi/finduser/${_id}`}>
              {fname || 'N/A'}&nbsp;{lname || 'N/A'}
            </NavLink>
          </p>
          <p>{`${`${age}y` || 'N/A'}, ${height || 'N/A'}'', ${weight}kg, ${annualIncome} ${religion ||
            'N/A'}, ${motherTongue || 'N/A'}`}</p>
          <p>
            {city || 'N/A'}, &nbsp;
            {country || 'N/A'}
          </p>
          <NavLink to={`/my-shaadi/finduser/${_id}`}>
            full profile <i className="fa fa-caret-right" aria-hidden="true" />
          </NavLink>
        </span>
      </div>
    );
  }
}

ProfileCompactView.propTypes = {
  _id: PropTypes.string,
  fname: PropTypes.string,
  lname: PropTypes.string,
  religion: PropTypes.string,
  age: PropTypes.number,
  height: PropTypes.string,
  city: PropTypes.string,
  image: PropTypes.string,
  country: PropTypes.string,
  motherTongue: PropTypes.string,
  data: PropTypes.object,
};

export default ProfileCompactView;
