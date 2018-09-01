import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../../models/user';
import { UserActions, UserActionTypes } from '../actions/user.actions';
import { createFeatureSelector } from '@ngrx/store';

export const userAdapter = createEntityAdapter<User>();

export interface State extends EntityState<User> {
}

export const initialState: State = userAdapter.getInitialState();


export function userReducer(
  state: State = initialState,
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


export const getUserState = createFeatureSelector<State>('user');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = userAdapter.getSelectors(getUserState);
