/**
 *
 * RightSidePartnerSearchContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import WavesButton from 'components/WavesButton';

import './style.scss';

class RightSidePartnerSearchContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { heading, children, btn, footer, clickHandler } = this.props;
    return (
      <div className="right-side-partner-search-container">
        <h5>{heading}</h5>
        {children}
        {btn && (
          <div className="row">
            <div className="col-12 text-center">
              <WavesButton clickHandler={clickHandler} label={btn} />
            </div>
          </div>
        )}

        {footer && (
          <h5 className="right-side-partner-search-footer">
            <NavLink to="#">
              Profile Search{' '}
              <i className="fa fa-caret-right" aria-hidden="true" />
            </NavLink>
            <NavLink className="pull-right" to="/my-shaadi/search">
              More Option <i className="fa fa-caret-right" aria-hidden="true" />
            </NavLink>
          </h5>
        )}
      </div>
    );
  }
}

RightSidePartnerSearchContainer.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  btn: PropTypes.string,
  clickHandler: PropTypes.func,
  footer: PropTypes.bool,
};

export default RightSidePartnerSearchContainer;
