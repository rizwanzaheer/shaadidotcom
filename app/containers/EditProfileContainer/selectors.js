import { createSelector } from 'reselect';

/**
 * Direct selector to the editProfileContainer state domain
 */
const selectEditProfileContainerDomain = (state) => state.get('editProfileContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EditProfileContainer
 */

const makeSelectEditProfileContainer = () => createSelector(
  selectEditProfileContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectEditProfileContainer;
export {
  selectEditProfileContainerDomain,
};
