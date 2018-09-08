import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userAdapter } from './reducers';
import { UserState } from '../index';

export * from './reducers';
export * from './actions';
export * from './effects';

export const getUserState = createFeatureSelector<UserState>('user');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = userAdapter.getSelectors(createSelector(getUserState, state => state.base));
