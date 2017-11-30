
import { fromJS } from 'immutable';
import backofficeReducer from '../reducer';

describe('backofficeReducer', () => {
  it('returns the initial state', () => {
    expect(backofficeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
