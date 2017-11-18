import { UNAUTH_USER } from './constants';
export function signoutUser() {
  return {
    type: UNAUTH_USER,
  };
}
