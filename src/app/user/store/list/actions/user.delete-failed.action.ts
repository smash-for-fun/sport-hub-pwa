import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.actions';

export class UserDeleteFailedAction implements Action {
  readonly type = UserActionTypes.DELETE_FAILED;

  constructor(error) {

  }
}
