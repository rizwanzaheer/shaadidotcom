import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from './actions';

class Signin extends Component {
  // eslint-disable-line
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    console.log(email, password);
  }
  render() {
    const { handleSubmit, fields: { email, password } } = this.props;
    return (
      <div className="row">
        <form
          className="col s12"
          onSubmit={handleSubmit(this.handleFormSubmit)}
        >
          <div className="row">
            <div className="input-field col s12">
              <Field
                {...email}
                id="email"
                value="rizwan@gmail.com"
                name="email"
                className="validate"
                component="input"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <Field
                {...password}
                id="password"
                name="password"
                component="input"
                className="validate"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <button className="btn waves-effect waves-light" name="action">
              Signin
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ errorMessage: state.auth.error });

export default reduxForm(
  {
    form: 'signin',
    fields: ['email', 'password'],
  },
  mapStateToProps,
  actions
)(Signin);
