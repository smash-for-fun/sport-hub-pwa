import { Action } from '@ngrx/store';
import { ClubActionTypes } from './clubs.actions';

export class ClubDeleteAction implements Action {
  readonly type = ClubActionTypes.DELETE;

  constructor(public uid: string) {

  }
}
