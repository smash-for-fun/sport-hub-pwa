import { Action } from '@ngrx/store';
import { UserModel } from '../../../models/user.model';
import { UserActionTypes } from './user.actions';
import * as firebase from 'firebase';

export class UserCreateAction implements Action {
  readonly type = UserActionTypes.CREATE;

  constructor(public payload: firebase.User) {

  }
}
