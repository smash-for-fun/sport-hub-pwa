import * as fromList from './list';
import { userAdapter } from './list';
import * as fromPreferences from './prefrences';

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
  list: fromList.ListState;
  preferences: fromPreferences.PreferencesState;
}

export const reducers: ActionReducerMap<UserState> = {
  list: fromList.reducer,
  preferences: fromPreferences.reducer
};

const getUserState = createFeatureSelector<UserState>('user');

export const preferenceSelector = createSelector(getUserState, state => state.preferences);
export const {
  selectIds,
  selectEntities: selectUsers,
  selectAll: selectAllUsers,
  selectTotal
} = userAdapter.getSelectors(createSelector(getUserState, state => state.list));

export const getSelectedUserId = (state: UserState) => state.list.selectedUser;
export const selectCurrentUser = createSelector(getUserState, getSelectedUserId);
