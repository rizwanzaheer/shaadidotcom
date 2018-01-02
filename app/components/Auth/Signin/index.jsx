import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import axios from 'axios';
import * as actions from './actions';

import EnvChecker from '../../../config/envChecker';
import './siginStyle.scss';

class Signin extends Component {
  // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isEmailValid: false,
      isPasswordValid: false,
      hasEmail: false,
      hasPassword: false,
      notValidUser: false,
      error: false,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.signinbtnClickHandler = this.signinbtnClickHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillMount() {
    if (localStorage.getItem('user_token')) {
      window.location.pathname = 'my-shaadi';
    }
  }
  handleFormSubmit({ email, password }) {
    console.log(email, password);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      isEmailValid: false,
      isPasswordValid: false,
      hasEmail: false,
      hasPassword: false,
      notValidUser: false,
      error: false,
      [name]: value,
    });
  }
  signinbtnClickHandler(e) {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email && !password) {
      this.setState({
        error: true,
      });
    } else if (!email) {
      this.setState({
        hasEmail: true,
      });
    } else if (!password) {
      this.setState({
        hasPassword: true,
      });
    } else {
      axios
        .post(`${EnvChecker.nodeApiServerUrl}/signin`, this.state)
        .then((response) => {
          const { status, statusText, data } = response;
          if (status === 200 && statusText === 'OK') {
            localStorage.setItem('user_token', data.token);
            localStorage.setItem('user_detail', JSON.stringify(data.user_detail));
            console.log('user data: ', data);
            // window.history.push('/test');
            // window.history.push('/searchuser');
            window.location.pathname = 'my-shaadi';
            // location.push('/features');
            // console.log(window.location);
            console.log('successfuly Signin!');
          }
        })
        .catch((error) => {
          const { status, statusText, data } = error.response;
          if (status === 401 && statusText === 'Unauthorized') {
            this.setState({
              notValidUser: true,
            });
          }
          console.log('catch', error.response);
          console.log('status code: ', status);
          console.log('status text: ', statusText);
        });
    }
  }
  render() {
    const { handleSubmit, fields: { email, password } } = this.props;
    return (
      <div className="col-12">
        <div className="col-8 col-md-8 col-xl-4 offset-2 offset-xl-3 signin-container">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={this.handleInputChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
            </div>
            <button
              onClick={this.signinbtnClickHandler}
              className="btn btn-primary"
            >
              Signin
            </button>
          </form>
        </div>
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
