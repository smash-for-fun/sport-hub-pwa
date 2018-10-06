import { Action } from '@ngrx/store';
import { ClubActionTypes } from './clubs.actions';

export class ClubUpdateSuccessAction implements Action {
  readonly type = ClubActionTypes.UPDATE_SUCCESS;

  constructor() {

  }
}
