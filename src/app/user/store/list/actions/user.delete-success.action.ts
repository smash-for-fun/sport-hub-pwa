import { Action } from '@ngrx/store';
import { UserListActionTypes } from './user.actions';

export class UserDeleteSuccessAction implements Action {
  readonly type = UserListActionTypes.DELETE_SUCCESS;

  constructor() {}
}
