import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { screenReducer, ScreenState } from './screen';

export interface SharedState {
  screen: ScreenState;
}

export const sharedReducers: ActionReducerMap<SharedState> = {
  screen: screenReducer
};

const getSharedState = createFeatureSelector<SharedState>('_shared');
export const screenSelector = createSelector(
  getSharedState,
  state => state.screen
);
