import { createSelector } from 'reselect';

/**
 * Direct selector to the searchUsers state domain
 */
const selectSearchUsersDomain = (state) => state.get('searchUsers');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SearchUsers
 */

const makeSelectSearchUsers = () => createSelector(
  selectSearchUsersDomain,
  (substate) => substate.toJS()
);

export default makeSelectSearchUsers;
export {
  selectSearchUsersDomain,
};
