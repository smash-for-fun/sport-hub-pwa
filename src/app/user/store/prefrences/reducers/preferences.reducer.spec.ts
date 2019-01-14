import { initialPreferencesState, preferencesReducer } from './preferences.reducer';

describe('Preferences Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = preferencesReducer(initialPreferencesState, action);

      expect(result).toBe(initialPreferencesState);
    });
  });
});
