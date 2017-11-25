/**
 *
 * WorkFlowContainer
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import WorkFlowDiv from './WorkFlowContainerStyle';
import './WorkFlowContainer.scss';

function WorkFlowContainer({ title, para }) {
  return (
    <WorkFlowDiv className={`col-12 col-sm-4 workFlowContainer ${title}`}>
      <NavLink to="#">
        <span />
      </NavLink>
      <div className="details-wrapper">
        <h4>{title}</h4>
        <p>{para}</p>
      </div>
    </WorkFlowDiv>
  );
}

WorkFlowContainer.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  para: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default WorkFlowContainer;
