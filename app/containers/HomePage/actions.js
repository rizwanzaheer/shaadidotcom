/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import axios from 'axios';
import { nodeApiServerUrl } from '../../config/envChecker';
import { CHANGE_USERNAME, UPDATE_IMAGE } from './constants';
/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}
export function namefunc(data) {
  axios.post();
  return {
    type: UPDATE_IMAGE,
    payload: { data },
  };
}

export function imageChange(userId, imagePreviewUrl) {
  return (dispatch) => {
    axios
      .post(`${nodeApiServerUrl}/api/upload`, {
        userId,
        imageUrl: imagePreviewUrl,
      })
      .then((data) => {
        dispatch(namefunc(data.data.new_user_detail));
        localStorage.setItem(
          'user_detail',
          JSON.stringify(data.data.new_user_detail)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
