import { Action } from '@ngrx/store';
import { LoginActionTypes } from './login.actions';
import * as firebase from 'firebase';

export class LoginSignUpAction implements Action {
  readonly type = LoginActionTypes.SignUp;

  user: firebase.User;

  constructor(payload: { user: firebase.User }) {
    this.user = payload.user;
  }
}
