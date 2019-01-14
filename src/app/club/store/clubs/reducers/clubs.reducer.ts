import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ClubActions, ClubActionTypes } from '../actions';
import { ClubModel } from './../../../models/club.model';

export const clubAdapter = createEntityAdapter<ClubModel>({
  selectId: (club: ClubModel) => club.uid
});

export interface ClubListState extends EntityState<ClubModel> {
  selectedClub: ClubModel;
}

export const clubInitialState: ClubListState = clubAdapter.getInitialState({
  selectedClub: null
});

export function clubReducer(
  state: ClubListState = clubInitialState,
  action: ClubActions
): ClubListState {
  switch (action.type) {
    case ClubActionTypes.ADDED:
      return clubAdapter.addOne(action.payload, state);

    case ClubActionTypes.MODIFIED:
      return clubAdapter.updateOne(
        {
          id: action.payload.uid,
          changes: action.payload
        },
        state
      );

    case ClubActionTypes.REMOVED:
      return clubAdapter.removeOne(action.payload.uid, state);

    case ClubActionTypes.SELECT_SUCCESS:
      return Object.assign({ ...state, selectedClub: action.club });

    default:
      return state;
  }
}
