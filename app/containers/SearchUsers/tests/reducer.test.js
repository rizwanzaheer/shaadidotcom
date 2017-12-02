
import { fromJS } from 'immutable';
import searchUsersReducer from '../reducer';

describe('searchUsersReducer', () => {
  it('returns the initial state', () => {
    expect(searchUsersReducer(undefined, {})).toEqual(fromJS({}));
  });
});
