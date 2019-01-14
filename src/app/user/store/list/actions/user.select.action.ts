import { Action } from '@ngrx/store';
import { UserListActionTypes } from './user.actions';

export class UserSelectAction implements Action {
  readonly type = UserListActionTypes.SELECT;

  uid: string | number;

  constructor(payload: { uid: string | number }) {
    this.uid = payload.uid;
  }
}
