import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from '../index';

export * from './reducers';
export * from './actions';

export const getSharedState = createFeatureSelector<SharedState>('_shared');
export const screenSelector = createSelector(getSharedState, state => state.screen);
