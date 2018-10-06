import { Action } from '@ngrx/store';
import { ClubActionTypes } from './clubs.actions';

export class ClubDeleteFailedAction implements Action {
  readonly type = ClubActionTypes.DELETE_FAILED;

  constructor(error) {

  }
}
