
import { fromJS } from 'immutable';
import editPreferencesReducer from '../reducer';

describe('editPreferencesReducer', () => {
  it('returns the initial state', () => {
    expect(editPreferencesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
