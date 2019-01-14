import { initialScreenState, screenReducer } from './screen.reducer';

describe('Screen Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = screenReducer(initialScreenState, action);

      expect(result).toBe(initialScreenState);
    });
  });
});
