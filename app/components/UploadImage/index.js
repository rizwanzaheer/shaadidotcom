/**
 *
 * UploadImage
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { nodeApiServerUrl } from '../../config/envChecker';

class UploadImage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      file: '',
      userId: this.props.userId,
      imagePreviewUrl: '',
    };
  }
  handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('working');
    const { userId, imagePreviewUrl } = this.state;
    // this.props.imageChange(userId, imagePreviewUrl);
    !imagePreviewUrl
      ? ''
      : axios
          .post(`${nodeApiServerUrl}/api/upload`, {
            userId,
            imageUrl: imagePreviewUrl,
          })
          .then(({ data }) => {
            localStorage.setItem(
              'user_detail',
              JSON.stringify(data.new_user_detail)
            );
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
  }

  render() {
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="image" style={{ width: '200px' }} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }
    return (
      <div className="previewComponent">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            className="fileInput"
            type="file"
            onChange={(e) => this.handleImageChange(e)}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={(e) => this.handleSubmit(e)}
          >
            Upload Image
          </button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    );
  }
}

UploadImage.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UploadImage;
