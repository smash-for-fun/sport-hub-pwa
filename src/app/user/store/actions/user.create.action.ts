import { Action } from '@ngrx/store';
import { User } from '../../models/user';
import { UserActionTypes } from './user.actions';

export class UserCreateAction implements Action {
  readonly type = UserActionTypes.CREATE;

  constructor(public payload: User) {

  }
}
