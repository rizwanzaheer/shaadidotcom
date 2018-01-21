import { createSelector } from 'reselect';

/**
 * Direct selector to the settingPage state domain
 */
const selectSettingPageDomain = (state) => state.get('settingPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SettingPage
 */

const makeSelectSettingPage = () => createSelector(
  selectSettingPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectSettingPage;
export {
  selectSettingPageDomain,
};
