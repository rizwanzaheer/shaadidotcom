/**
*
* WorkFlowContainer
*
*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import WorkFlowDiv from './WorkFlowContainerStyle';

function WorkFlowContainer({ title, para }) {
  return (
    <WorkFlowDiv className="col s4">
      <NavLink to="#">
        <span />
      </NavLink>
      <h3>{title}</h3>
      <p>{para}</p>
    </WorkFlowDiv>
  );
}

WorkFlowContainer.propTypes = {
  title: PropTypes.string,
  para: PropTypes.string,
};

export default WorkFlowContainer;
