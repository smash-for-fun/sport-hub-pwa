import { UserModel } from '@app/user/models';
import { Action } from '@ngrx/store';
import { UserListActionTypes } from './user.actions';

export class UserRemovedAction implements Action {
  readonly type = UserListActionTypes.REMOVED;

  constructor(public payload: UserModel) {}
}
