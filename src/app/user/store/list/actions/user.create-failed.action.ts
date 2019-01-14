import { Action } from '@ngrx/store';
import { UserListActionTypes } from './user.actions';

export class UserCreateFailedAction implements Action {
  readonly type = UserListActionTypes.CREATE_FAILED;

  constructor() {

  }
}
