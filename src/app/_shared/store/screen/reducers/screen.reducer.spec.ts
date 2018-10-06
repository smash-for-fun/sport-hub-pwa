import { initialState, screenReducer } from './screen.reducer';

describe('Screen Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = screenReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
