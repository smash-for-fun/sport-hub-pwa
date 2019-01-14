import { Action } from '@ngrx/store';
import { ClubActionTypes } from './clubs.actions';

export class ClubUpdateFailedAction implements Action {
  readonly type = ClubActionTypes.UPDATE_FAILED;

  constructor(error) {}
}
