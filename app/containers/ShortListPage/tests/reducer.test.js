
import { fromJS } from 'immutable';
import shortListPageReducer from '../reducer';

describe('shortListPageReducer', () => {
  it('returns the initial state', () => {
    expect(shortListPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
