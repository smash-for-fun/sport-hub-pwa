import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.actions';

export class UserCreateSuccessAction implements Action {
  readonly type = UserActionTypes.CREATE_SUCCESS;

  constructor() {

  }
}
