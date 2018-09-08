import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.actions';
import { User } from '../../../models/user';

export class UserAddedAction implements Action {
  readonly type = UserActionTypes.ADDED;

  constructor(public payload: User) {

  }
}
