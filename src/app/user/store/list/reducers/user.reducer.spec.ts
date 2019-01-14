import { intialUserState, userListReducer } from './user.reducer';

describe('UserModel Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = userListReducer(intialUserState, action);

      expect(result).toBe(intialUserState);
    });
  });
});
