import { createSelector } from 'reselect';

/**
 * Direct selector to the findUser state domain
 */
const selectFindUserDomain = (state) => state.get('findUser');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FindUser
 */

const makeSelectFindUser = () => createSelector(
  selectFindUserDomain,
  (substate) => substate.toJS()
);

export default makeSelectFindUser;
export {
  selectFindUserDomain,
};
