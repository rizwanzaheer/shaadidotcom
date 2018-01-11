
import { fromJS } from 'immutable';
import findUserReducer from '../reducer';

describe('findUserReducer', () => {
  it('returns the initial state', () => {
    expect(findUserReducer(undefined, {})).toEqual(fromJS({}));
  });
});
