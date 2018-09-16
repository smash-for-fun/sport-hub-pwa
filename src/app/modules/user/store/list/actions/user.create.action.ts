import { Action } from '@ngrx/store';
import { UserModel } from '../../../models/user.model';
import { UserActionTypes } from './user.actions';

export class UserCreateAction implements Action {
  readonly type = UserActionTypes.CREATE;

  constructor(public payload: UserModel) {

  }
}
