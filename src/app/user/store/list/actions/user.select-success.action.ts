import { UserModel } from '@app/user/models';
import { Action } from '@ngrx/store';
import { UserListActionTypes } from './user.actions';

export class UserSelectSuccessAction implements Action {
  readonly type = UserListActionTypes.SELECT_SUCCESS;

  user: UserModel;

  constructor(payload: { user: UserModel }) {
    this.user = payload.user;
  }
}
