import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.actions';
import { UserModel } from '../../../models/user.model';

export class UserSelectSuccessAction implements Action {
  readonly type = UserActionTypes.SELECT_SUCCESS;

  user: UserModel

  constructor(payload: { user: UserModel }) {
    this.user = payload.user;
  }
}
