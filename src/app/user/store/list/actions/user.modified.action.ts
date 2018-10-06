import { Action } from '@ngrx/store';
import { UserModel } from '../../../models/user.model';
import { UserActionTypes } from './user.actions';

export class UserModifiedAction implements Action {
  readonly type = UserActionTypes.MODIFIED;

  constructor(public payload: UserModel) {
  }
}
