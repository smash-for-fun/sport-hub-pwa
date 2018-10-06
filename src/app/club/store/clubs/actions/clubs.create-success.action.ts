import { Action } from '@ngrx/store';
import { ClubActionTypes } from './clubs.actions';

export class ClubCreateSuccessAction implements Action {
  readonly type = ClubActionTypes.CREATE_SUCCESS;

  constructor() {

  }
}
