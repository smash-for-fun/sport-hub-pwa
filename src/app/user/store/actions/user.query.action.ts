import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.actions';

export class UserQueryAction implements Action {
  readonly type = UserActionTypes.QUERY;

  constructor() {

  }
}
