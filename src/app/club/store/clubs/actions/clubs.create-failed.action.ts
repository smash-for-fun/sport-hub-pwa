import { Action } from '@ngrx/store';
import { ClubActionTypes } from './clubs.actions';

export class ClubCreateFailedAction implements Action {
  readonly type = ClubActionTypes.CREATE_FAILED;

  constructor() {

  }
}
