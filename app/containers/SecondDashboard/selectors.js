import { createSelector } from 'reselect';

/**
 * Direct selector to the secondDashboard state domain
 */
const selectSecondDashboardDomain = (state) => state.get('secondDashboard');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SecondDashboard
 */

const makeSelectSecondDashboard = () => createSelector(
  selectSecondDashboardDomain,
  (substate) => substate.toJS()
);

export default makeSelectSecondDashboard;
export {
  selectSecondDashboardDomain,
};
