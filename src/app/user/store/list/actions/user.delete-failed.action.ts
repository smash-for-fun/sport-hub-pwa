import { Action } from '@ngrx/store';
import { UserListActionTypes } from './user.actions';

export class UserDeleteFailedAction implements Action {
  readonly type = UserListActionTypes.DELETE_FAILED;

  constructor(error) {

  }
}
