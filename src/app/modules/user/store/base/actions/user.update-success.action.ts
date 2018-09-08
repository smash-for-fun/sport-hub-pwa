import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.actions';

export class UserUpdateSuccessAction implements Action {
  readonly type = UserActionTypes.UPDATE_SUCCESS;

  constructor() {

  }
}
