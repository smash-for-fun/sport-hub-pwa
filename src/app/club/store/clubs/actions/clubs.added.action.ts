import { Action } from '@ngrx/store';
import { ClubActionTypes } from './clubs.actions';
import { ClubModel } from '../../../models/club.model';

export class ClubAddedAction implements Action {
  readonly type = ClubActionTypes.ADDED;

  constructor(public payload: ClubModel) {

  }
}
