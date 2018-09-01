import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.actions';

export class UserUpdateFailedAction implements Action {
  readonly type = UserActionTypes.UPDATE_FAILED;

  constructor(error) {

  }
}
