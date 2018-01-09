import { createSelector } from 'reselect';

/**
 * Direct selector to the editPreferences state domain
 */
const selectEditPreferencesDomain = (state) => state.get('editPreferences');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EditPreferences
 */

const makeSelectEditPreferences = () => createSelector(
  selectEditPreferencesDomain,
  (substate) => substate.toJS()
);

export default makeSelectEditPreferences;
export {
  selectEditPreferencesDomain,
};
