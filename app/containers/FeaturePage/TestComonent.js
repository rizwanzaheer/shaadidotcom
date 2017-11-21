import React, { Component } from 'react';

export default class TestComponent extends Component {
  render() {
    console.log('test component: ', this.props.children);
    return <div>test Component</div>;
  }
}
