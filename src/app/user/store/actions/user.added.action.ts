import { Action } from '@ngrx/store';
import { User } from '../../models/user';
import { UserActionTypes } from './user.actions';

export class UserAddedAction implements Action {
  readonly type = UserActionTypes.ADDED;

  constructor(public payload: User) {

  }
}
