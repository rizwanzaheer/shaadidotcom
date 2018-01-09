/**
 *
 * ReactRangeSlider
 *
 */

import React from 'react';
// import styled from 'styled-components';
// import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';

import 'rc-slider/assets/index.css';
// import 'rc-tooltip/assets/bootstrap.css';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './style.scss';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

// const wrapperStyle = { width: 400, margin: 50 };

class ReactRangeSlider extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      value: newProps.defaultValue,
    });
  }
  onChange = (value) => {
    this.setState({ value });
    console.log('this.state: ', this.state.value);
    this.props.onChange(this.state.value);
  };
  // handle = (props) => {
  //   const { value, dragging, index, ...restProps } = props;
  //   console.log("console ", this.state.value );
  //   return (
  //     <Tooltip
  //     prefixCls="rc-slider-tooltip"
  //     overlay={value}
  //     visible={dragging}
  //     placement="top"
  //     key={index}
  //     >
  //       <Handle value={value} {...restProps} />
  //     </Tooltip>
  //   );
  // };
  render() {
    const { min, max, defaultValue, label1, label2 } = this.props;
    return (
      <div className="custome-react-range-slider">
        {label1 && <label htmlFor="">{label1}</label>}
        {label2 && (
          <label className="pull-right" htmlFor="">
            {label2}
          </label>
        )}
        <Range
          min={min}
          max={max}
          defaultValue={defaultValue}
          tipFormatter={(value) => `${value} years `}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

ReactRangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.array,
  label1: PropTypes.string,
  label2: PropTypes.string,
};

export default ReactRangeSlider;
