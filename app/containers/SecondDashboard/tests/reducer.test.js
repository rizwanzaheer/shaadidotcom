
import { fromJS } from 'immutable';
import secondDashboardReducer from '../reducer';

describe('secondDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(secondDashboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
