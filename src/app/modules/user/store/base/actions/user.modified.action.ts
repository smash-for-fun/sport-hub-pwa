import { Action } from '@ngrx/store';
import { User } from '../../../models/user';
import { UserActionTypes } from './user.actions';

export class UserModifiedAction implements Action {
  readonly type = UserActionTypes.MODIFIED;

  constructor(public payload: User) {
  }
}
