import { Action } from '@ngrx/store';
import { LoginActionTypes } from './login.actions';
import { UserModel } from '../../../../user/models/user.model';
import * as firebase from 'firebase';

export class LoginSignedInAction implements Action {
  readonly type = LoginActionTypes.SignedIn;

  user: UserModel;

  constructor(payload: { user: firebase.User }) {
    this.user = Object.assign(new UserModel(), {
      email: payload.user.email,
      displayName: payload.user.displayName || payload.user.email,
      photoUrl: payload.user.photoURL
    });
  }
}
