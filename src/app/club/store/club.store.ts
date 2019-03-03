import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { clubAdapter, ClubListState, clubReducer } from './clubs';

export interface ClubState {
  clubs: ClubListState;
}

export const clubReducers: ActionReducerMap<ClubState> = {
  clubs: clubReducer
};

const getClubState = createFeatureSelector<ClubState>('club');

export const {
  selectIds,
  selectEntities: selectClubs,
  selectAll: selectAllClubs,
  selectTotal
} = clubAdapter.getSelectors(
  createSelector(
    getClubState,
    state => state.clubs
  )
);

export const getSelectedClubId = (state: ClubState) => state.clubs.selectedClub;
export const selectCurrentClub = createSelector(
  getClubState,
  getSelectedClubId
);
