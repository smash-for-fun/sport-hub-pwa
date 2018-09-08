import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../../../models/user';
import { UserActions, UserActionTypes } from '../actions';

export const userAdapter = createEntityAdapter<User>();

export interface BaseState extends EntityState<User> {
}

export const initialState: BaseState = userAdapter.getInitialState();


export function userReducer(
  state: BaseState = initialState,
  action: UserActions
) {
  switch (action.type) {
    case UserActionTypes.ADDED:
      return userAdapter.addOne(action.payload, state);

    case UserActionTypes.MODIFIED:
      return userAdapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, state);

    case UserActionTypes.REMOVED:
      return userAdapter.removeOne(action.payload.id, state);

    default:
      return state;
  }
}



