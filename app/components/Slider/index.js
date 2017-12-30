/**
 *
 * Slider
 *
 */

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import $ from 'jquery';
import img1 from '../../images/sn-couple_v001.jpg';
import img2 from '../../images/67c6759c76779baf1bff4a1cee846990.jpg';
import img3 from '../../images/f26be5b085b48791dde15bb47f3cc90d.jpg';
import img4 from '../../images/5b863d58ece6b24dc1cb378e3b2624be.jpg';

import './SliderStyle.scss';
import './slick.scss';

import slick from './Slick';

class Slider extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      // arrows: true,
      // autoplay: true,
      // autoplaySpeed: 8000,
    });
  }
  render() {
    return (
      <div className="slider">
        <div
          className="image-container"
          style={{ backgroundImage: `url(${img1})` }}
        >
        </div>
        <div
          className="image-container"
          style={{ backgroundImage: `url(${img2})` }}
        >
        </div>
        <div
          className="image-container"
          style={{ backgroundImage: `url(${img3})` }}
        >
        </div>
        <div
          className="image-container"
          style={{ backgroundImage: `url(${img4})` }}
        >
        </div>
      </div>
    );
  }
}

Slider.propTypes = {};

export default Slider;
