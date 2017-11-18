import { AUTH_ERROR, AUTH_USER, UNAUTH_USER } from './constants';
export default function (state = {}, action) {
  switch (action.type) { // eslint-disable-line
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, error: '', authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
  }
  return state;
}
