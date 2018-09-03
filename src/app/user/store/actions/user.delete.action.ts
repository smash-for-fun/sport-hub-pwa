import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.actions';

export class UserDeleteAction implements Action {
  readonly type = UserActionTypes.DELETE;

  constructor(public id: string) {

  }
}
