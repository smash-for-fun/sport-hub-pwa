import { UserModel } from '@app/user/models';
import { Action } from '@ngrx/store';
import { UserListActionTypes } from './user.actions';

export class UserUpdateAction implements Action {
  readonly type = UserListActionTypes.UPDATE;

  constructor(public uid: string, public changes: Partial<UserModel>) {}
}
