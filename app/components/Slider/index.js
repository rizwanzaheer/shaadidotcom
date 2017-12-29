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

import './SliderStyle.scss';
import './slick.scss';

const slick = require('./Slick.js');

class Slider extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    $('.slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          },
        },
      ],
    });
  }
  render() {
    return (
      <div className="slider">
        <div className="heading">
          <img src={a} alt="logo" />
        </div>
        <div className="details">
          <p>
            &#8220; <FormattedMessage {...messages.header} />&#8221;
          </p>
        </div>
        <div className="about-client">
          <div className="client-img">
            <div className="img-container">
              {/* <img src={`${props.data.clientImg}`} alt="#" /> */}
            </div>
          </div>
          <div className="client-details">
            <h5>
              <strong>client name</strong>
            </h5>
            <h5>
              <strong>client desg</strong>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

Slider.propTypes = {};

export default Slider;
