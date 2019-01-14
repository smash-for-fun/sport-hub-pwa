import { Action } from '@ngrx/store';
import { UserListActionTypes } from './user.actions';

export class UserUpdateSuccessAction implements Action {
  readonly type = UserListActionTypes.UPDATE_SUCCESS;

  constructor() {}
}
