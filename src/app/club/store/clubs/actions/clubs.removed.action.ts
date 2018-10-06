import { Action } from '@ngrx/store';
import { ClubModel } from '../../../models/club.model';
import { ClubActionTypes } from './clubs.actions';

export class ClubRemovedAction implements Action {
  readonly type = ClubActionTypes.REMOVED;

  constructor(public payload: ClubModel) {

  }
}
