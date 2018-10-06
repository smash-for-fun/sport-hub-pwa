import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { UserModel } from '../../../models/user.model';
import { UserActions, UserActionTypes } from '../actions';

export const userAdapter = createEntityAdapter<UserModel>({
  selectId: (location: UserModel) => location.uid,
});

export interface ListState extends EntityState<UserModel> {
  selectedUser: UserModel;
}

export const initialState: ListState = userAdapter.getInitialState({
  selectedUser: null
});


export function reducer(
  state: ListState = initialState,
  action: UserActions
): ListState {
  switch (action.type) {
    case UserActionTypes.ADDED:
      return userAdapter.addOne(action.payload, state);

    case UserActionTypes.MODIFIED:
      return userAdapter.updateOne({
        id: action.payload.uid,
        changes: action.payload
      }, state);

    case UserActionTypes.REMOVED:
      return userAdapter.removeOne(action.payload.uid, state);

    case UserActionTypes.SELECT_SUCCESS:
      return Object.assign({...state, selectedUser: action.user});

    default:
      return state;
  }
}



