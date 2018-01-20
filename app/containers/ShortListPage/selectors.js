import { createSelector } from 'reselect';

/**
 * Direct selector to the shortListPage state domain
 */
const selectShortListPageDomain = (state) => state.get('shortListPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ShortListPage
 */

const makeSelectShortListPage = () => createSelector(
  selectShortListPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectShortListPage;
export {
  selectShortListPageDomain,
};
