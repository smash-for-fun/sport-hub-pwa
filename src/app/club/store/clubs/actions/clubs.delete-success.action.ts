import { Action } from '@ngrx/store';
import { ClubActionTypes } from './clubs.actions';

export class ClubDeleteSuccessAction implements Action {
  readonly type = ClubActionTypes.DELETE_SUCCESS;

  constructor() {  }
}
