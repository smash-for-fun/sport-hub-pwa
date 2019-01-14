import { UserModel } from '@app/user/models';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { UserListActions, UserListActionTypes } from '../actions';

export const userListAdapter = createEntityAdapter<UserModel>({
  selectId: (location: UserModel) => location.uid
});

export interface UserListState extends EntityState<UserModel> {
  selectedUser: UserModel;
}

export const intialUserState: UserListState = userListAdapter.getInitialState({
  selectedUser: null
});

export function userListReducer(
  state: UserListState = intialUserState,
  action: UserListActions
): UserListState {
  switch (action.type) {
    case UserListActionTypes.ADDED:
      return userListAdapter.addOne(action.payload, state);

    case UserListActionTypes.MODIFIED:
      return userListAdapter.updateOne(
        {
          id: action.payload.uid,
          changes: action.payload
        },
        state
      );

    case UserListActionTypes.REMOVED:
      return userListAdapter.removeOne(action.payload.uid, state);

    case UserListActionTypes.SELECT_SUCCESS:
      return Object.assign({ ...state, selectedUser: action.user });

    default:
      return state;
  }
}
