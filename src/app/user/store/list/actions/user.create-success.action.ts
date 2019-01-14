import { Action } from '@ngrx/store';
import { UserListActionTypes } from './user.actions';

export class UserCreateSuccessAction implements Action {
  readonly type = UserListActionTypes.CREATE_SUCCESS;

  constructor() {

  }
}
