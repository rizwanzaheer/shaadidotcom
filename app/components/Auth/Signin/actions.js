import axios from 'axios';

import { AUTH_ERROR, AUTH_USER, ROOT_URL } from './constants';

export function signinUser({ email, password }) {
  return function (dispatch) {
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then((response) => {
        // if request is good...
        // -update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // -save the jwt token
        localStorage.setItem('token', response.data.token);
        // -redirect to the route '/what-ever-route'
        location.push('/features');
      })
      .catch(() => {
        // if request is bad...
        // - show an error to the user
        dispatch(authError('Bad login Info!'));
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}
