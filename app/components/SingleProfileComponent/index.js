/**
 *
 * SingleProfileComponent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import ConnectWith from 'components/ConnectWith';

import messages from './messages';

import testImage from '../../images/0c1ac4b49886e4a8ee5dad5164a9a5fa.jpg';

import './SingleProfileComponentStyle.scss';

class SingleProfileComponent extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      _id,
      fname,
      lname,
      age,
      caste,
      city,
      community,
      skinTone,
      hairType,
      height,
      image,
      gender,
      country,
      motherTongue,
      religion,
      aboutMySelf,
    } = this.props.data;
    console.log('data is: ', _id);
    return (
      <div className="col-12 single-search-user-contaienr">
        <h6 className="search-user-tilte">
          {fname} {lname}
        </h6>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-4">
                <div className="search-user-image">
                  <img
                    className="img-thumbnail"
                    src={image}
                    alt="profielImage"
                  />
                </div>
              </div>
              <div className="col-8">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Age/hight</td>
                      <td>
                        {`${age}y` || 'N/A'} / {`${height}''` || 'N/A'}
                      </td>
                    </tr>
                    <tr>
                      <td>Religion</td>
                      <td>{religion || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td>Mother Tongue</td>
                      <td>{motherTongue || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td>Hair/Skin type</td>
                      <td>
                        {hairType || 'N/A'} / {skinTone || 'N/A'}
                      </td>
                    </tr>
                    <tr>
                      <td>Community</td>
                      <td>{community || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>
                        {city || 'N/A'}, {country || 'N/A'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-12">
                <ConnectWith _id={_id} gender={gender} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SingleProfileComponent.propTypes = {
  _id: PropTypes.number,
  fname: PropTypes.string,
  lname: PropTypes.string,
  age: PropTypes.number,
  aboutMySelf: PropTypes.string,
  city: PropTypes.string,
  caste: PropTypes.string,
  community: PropTypes.string,
  religion: PropTypes.string,
  gender: PropTypes.string,
  motherTongue: PropTypes.string,
  height: PropTypes.any,
  image: PropTypes.any,
  data: PropTypes.object,
};

export default SingleProfileComponent;
