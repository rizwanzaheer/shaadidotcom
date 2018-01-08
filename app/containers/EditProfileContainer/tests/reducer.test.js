
import { fromJS } from 'immutable';
import editProfileContainerReducer from '../reducer';

describe('editProfileContainerReducer', () => {
  it('returns the initial state', () => {
    expect(editProfileContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
