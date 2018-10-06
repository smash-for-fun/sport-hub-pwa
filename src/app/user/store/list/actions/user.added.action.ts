import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.actions';
import { UserModel } from '../../../models/user.model';

export class UserAddedAction implements Action {
  readonly type = UserActionTypes.ADDED;

  constructor(public payload: UserModel) {

  }
}
