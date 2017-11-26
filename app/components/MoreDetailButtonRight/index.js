/**
 *
 * MoreDetailButtonRight
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './MoreDetailBtnRight.scss';

class MoreDetailButtonRight extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { label, url } = this.props;
    return (
      <NavLink
        to={url}
        className="btn waves-effect more-detail-btn-right"
        role="button"
      >
        <FormattedMessage
          {...messages.header}
          values={{
            btnLabel: label,
          }}
        />&nbsp;<i className="fa fa-caret-right" aria-hidden="true" />
      </NavLink>
    );
  }
}

MoreDetailButtonRight.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
};

export default MoreDetailButtonRight;
