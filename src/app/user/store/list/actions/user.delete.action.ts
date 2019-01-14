import { Action } from '@ngrx/store';
import { UserListActionTypes } from './user.actions';

export class UserDeleteAction implements Action {
  readonly type = UserListActionTypes.DELETE;

  constructor(public uid: string) {}
}
