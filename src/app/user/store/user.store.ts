import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { userListAdapter, userListReducer, UserListState } from './list';
import { preferencesReducer, PreferencesState } from './prefrences';

export interface UserState {
  list: UserListState;
  preferences: PreferencesState;
}

export const userReducer: ActionReducerMap<UserState> = {
  list: userListReducer,
  preferences: preferencesReducer
};

const getUserState = createFeatureSelector<UserState>('user');

export const preferenceSelector = createSelector(
  getUserState,
  state => state.preferences
);
export const {
  selectIds,
  selectEntities: selectUsers,
  selectAll: selectAllUsers,
  selectTotal
} = userListAdapter.getSelectors(
  createSelector(
    getUserState,
    state => state.list
  )
);

export const getSelectedUserId = (state: UserState) => state.list.selectedUser;
export const selectCurrentUser = createSelector(
  getUserState,
  getSelectedUserId
);
