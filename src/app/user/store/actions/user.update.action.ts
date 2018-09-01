import { Action } from '@ngrx/store';
import { User } from '../../models/user';
import { UserActionTypes } from './user.actions';

export class UserUpdateAction implements Action {
  readonly type = UserActionTypes.UPDATE;

  constructor(
    public id: string,
    public changes: Partial<User>) {

  }
}
