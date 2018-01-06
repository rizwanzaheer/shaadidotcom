import { createSelector } from 'reselect';

/**
 * Direct selector to the myProfile state domain
 */
const selectMyProfileDomain = (state) => state.get('myProfile');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MyProfile
 */

const makeSelectMyProfile = () => createSelector(
  selectMyProfileDomain,
  (substate) => substate.toJS()
);

export default makeSelectMyProfile;
export {
  selectMyProfileDomain,
};
