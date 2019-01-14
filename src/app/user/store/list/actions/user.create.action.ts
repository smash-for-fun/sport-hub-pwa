import { Action } from '@ngrx/store';
import * as firebase from 'firebase';
import { UserListActionTypes } from './user.actions';

export class UserCreateAction implements Action {
  readonly type = UserListActionTypes.CREATE;

  constructor(public payload: firebase.User) {

  }
}
