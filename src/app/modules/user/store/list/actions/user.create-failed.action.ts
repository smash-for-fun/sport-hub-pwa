import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.actions';

export class UserCreateFailedAction implements Action {
  readonly type = UserActionTypes.CREATE_FAILED;

  constructor() {

  }
}
