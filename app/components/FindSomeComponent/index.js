/**
 *
 * FindSomeComponent
 *
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import MoreDetailButtonRight from 'components/MoreDetailButtonRight';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './findSomeStyle.scss';

class FindSomeComponent extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.checkType = this.checkType.bind(this);
  }
  checkType = (name) => {
    switch (name) {
      case 'By Mother Tongue':
        return 'mothertongue';
      case 'By Religion':
        return 'religion';
      case 'By Community':
        return 'community';
      default:
        return 'in valid lang!';
    }
  };
  render() {
    const { name, options } = this.props.data;
    return (
      <div className="find-container text-center">
        <h6 className=""> {name} </h6>
        <hr />
        <div className="find-detail-container">
          {options.map((value) => (
            <NavLink
              key={value}
              className="text-secondary"
              to={`my-shaadi/searchusers?${this.checkType(name)}=${value.toLowerCase()}&pageType=shortlinks`}
            >
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
