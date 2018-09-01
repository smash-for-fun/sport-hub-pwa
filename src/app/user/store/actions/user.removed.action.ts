import { Action } from '@ngrx/store';
import { User } from '../../models/user';
import { UserActionTypes } from './user.actions';

export class UserRemovedAction implements Action {
  readonly type = UserActionTypes.REMOVED;

  constructor(public payload: User) {

  }
}
