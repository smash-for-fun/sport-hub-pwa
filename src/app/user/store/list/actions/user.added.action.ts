import { Action } from '@ngrx/store';
import { UserListActionTypes } from './user.actions';
import { UserModel } from '@app/user/models';

export class UserAddedAction implements Action {
  readonly type = UserListActionTypes.ADDED;

  constructor(public payload: UserModel) {

  }
}
