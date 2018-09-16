import * as fromScreen from './screen';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface SharedState {
  screen: fromScreen.ScreenState;
}

export const reducers: ActionReducerMap<SharedState> = {
  screen: fromScreen.screenReducer
};


const getSharedState = createFeatureSelector<SharedState>('_shared');
export const screenSelector = createSelector(getSharedState, state => state.screen);
