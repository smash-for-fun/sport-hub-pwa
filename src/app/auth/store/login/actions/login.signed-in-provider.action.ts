import { Action } from '@ngrx/store';
import { LoginActionTypes } from './login.actions';
import * as firebase from 'firebase';

export class LoginSignedInProviderAction implements Action {
  readonly type = LoginActionTypes.SignedInProvider;
  user: firebase.User;

  constructor(payload: { user: firebase.User }) {
    this.user = payload.user;
  }
}
