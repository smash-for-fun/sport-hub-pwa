import { Action } from '@ngrx/store';
import { UserModel } from '../../../models/user.model';
import { UserActionTypes } from './user.actions';

export class UserUpdateAction implements Action {
  readonly type = UserActionTypes.UPDATE;

  constructor(
    public uid: string,
    public changes: Partial<UserModel>) {

  }
}
