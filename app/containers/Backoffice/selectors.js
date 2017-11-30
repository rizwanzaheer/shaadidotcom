import { createSelector } from 'reselect';

/**
 * Direct selector to the backoffice state domain
 */
const selectBackofficeDomain = (state) => state.get('backoffice');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Backoffice
 */

const makeSelectBackoffice = () => createSelector(
  selectBackofficeDomain,
  (substate) => substate.toJS()
);

export default makeSelectBackoffice;
export {
  selectBackofficeDomain,
};
