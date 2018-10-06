import { Action } from '@ngrx/store';
import { ClubModel } from '../../../models/club.model';
import { ClubActionTypes } from './clubs.actions';

export class ClubModifiedAction implements Action {
  readonly type = ClubActionTypes.MODIFIED;

  constructor(public payload: ClubModel) {
  }
}
