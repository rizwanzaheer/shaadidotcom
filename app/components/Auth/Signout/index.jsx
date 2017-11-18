import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from './actions';

// import * as actions from ''

class SignOut extends Component {
  componentWillmount() {
    // this.props.signoutUser();
  }
  render() {
    return <div>Sorry To see you go..</div>;
  }
}
const validate = (formProps) => {
  const errors = {};
  console.log(formProps);
  return errors;
};

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'confirmPassword'],
  validate,
}, null, actions)(SignOut);
