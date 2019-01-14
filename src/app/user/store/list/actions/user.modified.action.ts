import { UserModel } from '@app/user/models';
import { Action } from '@ngrx/store';
import { UserListActionTypes } from './user.actions';

export class UserModifiedAction implements Action {
  readonly type = UserListActionTypes.MODIFIED;

  constructor(public payload: UserModel) {}
}
