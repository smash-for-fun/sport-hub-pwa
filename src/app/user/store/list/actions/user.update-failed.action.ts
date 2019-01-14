import { Action } from '@ngrx/store';
import { UserListActionTypes } from './user.actions';

export class UserUpdateFailedAction implements Action {
  readonly type = UserListActionTypes.UPDATE_FAILED;

  constructor(error) {}
}
