import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.actions';

export class UserSelectAction implements Action {
  readonly type = UserActionTypes.SELECT;

  uid: string | number;

  constructor(payload: { uid: string | number }) {
    this.uid = payload.uid;
  }
}
