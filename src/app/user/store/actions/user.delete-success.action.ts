import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.actions';

export class UserDeleteSuccessAction implements Action {
  readonly type = UserActionTypes.DELETE_SUCCESS;

  constructor() {  }
}
