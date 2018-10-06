import { Action } from '@ngrx/store';
import { UserModel } from '../../../models/user.model';
import { UserActionTypes } from './user.actions';

export class UserRemovedAction implements Action {
  readonly type = UserActionTypes.REMOVED;

  constructor(public payload: UserModel) {

  }
}
