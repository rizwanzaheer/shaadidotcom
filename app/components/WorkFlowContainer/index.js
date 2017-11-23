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

function WorkFlowContainer({ title, para, img }) {
  return (
    <WorkFlowDiv className="col s4 workFlowContainer">
      <NavLink to="#" style={{ background: `url(${img}) no-repeat left 1px`, backgroundSize: '100%' }}>
        <span />
      </NavLink>
      <h5>{title}</h5>
      <p>{para}</p>
    </WorkFlowDiv>
  );
}

WorkFlowContainer.propTypes = {
  title: PropTypes.string,
  para: PropTypes.string,
};

export default WorkFlowContainer;
