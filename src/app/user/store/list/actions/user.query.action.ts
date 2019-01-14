import { Action } from '@ngrx/store';
import { UserListActionTypes } from './user.actions';

export class UserQueryAction implements Action {
  readonly type = UserListActionTypes.QUERY;

  constructor() {}
}
