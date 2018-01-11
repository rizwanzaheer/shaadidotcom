/**
 *
 * ImageThumbnail
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './ImageThumbnail.scss';

class ImageThumbnail extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { image, name } = this.props;
    return (
      <img src={image} alt={name} className="img-thumbnail image-thumbnail" />
    );
  }
}

ImageThumbnail.propTypes = {
  name: PropTypes.string,
  image: PropTypes.any,
};

export default ImageThumbnail;
