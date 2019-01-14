import { Action } from '@ngrx/store';
import { ClubActionTypes } from './clubs.actions';
import { ClubModel } from '../../../models/club.model';

export class ClubSelectSuccessAction implements Action {
  readonly type = ClubActionTypes.SELECT_SUCCESS;

  club: ClubModel;

  constructor(payload: { club: ClubModel }) {
    this.club = payload.club;
  }
}
