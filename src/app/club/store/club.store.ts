import * as fromList from './clubs';
import { clubAdapter } from './clubs';

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface ClubState {
    clubs: fromList.ListState;
}

export const reducers: ActionReducerMap<ClubState> = {
    clubs: fromList.reducer
};

const getClubState = createFeatureSelector<ClubState>('club');

export const {
    selectIds,
    selectEntities: selectClubs,
    selectAll: selectAllClubs,
    selectTotal
} = clubAdapter.getSelectors(createSelector(getClubState, state => state.clubs));

export const getSelectedClubId = (state: ClubState) => state.clubs.selectedClub;
export const selectCurrentClub = createSelector(getClubState, getSelectedClubId);
