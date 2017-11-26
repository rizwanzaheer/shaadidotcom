/**
 *
 * FindSomeComponent
 *
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import MoreDetailButtonRight from "components/MoreDetailButtonRight";
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import H1 from '../H1';
import './findSomeStyle.scss';

class FindSomeComponent extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { name, options } = this.props.data;
    return (
      <div className="find-container text-center">
        <h6 className=""> {name} </h6>
        <hr />
        <div className="find-detail-container">
          {options.map((value) => (
            <NavLink key={value} className="text-secondary" to="#">
              {value}
            </NavLink>
          ))}
        </div>
        <MoreDetailButtonRight label="More Matrimonials" url="#" />
      </div>
    );
  }
}

FindSomeComponent.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  data: PropTypes.object,
};

export default FindSomeComponent;
