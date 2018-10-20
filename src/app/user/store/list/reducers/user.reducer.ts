import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { UserModel } from '../../../models/user.model';
import { UserActions, UserActionTypes } from '../actions';

export const userAdapter = createEntityAdapter<UserModel>({
  selectId: (location: UserModel) => location.uid
});

export interface ListState extends EntityState<UserModel> {
  selectedUser: UserModel;
  query: string;
}

export const initialState: ListState = userAdapter.getInitialState({
  selectedUser: null,
  query: null
});

export function reducer(state: ListState = initialState, action: UserActions): ListState {
  switch (action.type) {
    case UserActionTypes.ADDED:
      return userAdapter.addOne(action.payload, state);

    case UserActionTypes.MODIFIED:
      return userAdapter.updateOne(
        {
          id: action.payload.uid,
          changes: action.payload
        },
        state
      );

    case UserActionTypes.REMOVED:
      return userAdapter.removeOne(action.payload.uid, state);

    case UserActionTypes.SELECT_SUCCESS:
      return Object.assign({ ...state, selectedUser: action.user });

    case UserActionTypes.QUERY:
      return Object.assign({ ...state, query: action.query });

    default:
      return state;
  }
}
