import { UserModel } from './../../../../user/models/user.model';
import { LoginActionTypes } from './login.actions';
import { Action } from '@ngrx/store';
import * as firebase from 'firebase';

export class LoginSignedInAction implements Action {
  readonly type = LoginActionTypes.SignedIn;

  user: UserModel;

  constructor(payload: { club: firebase.User }) {
    this.user = Object.assign(new UserModel(), {
      email: payload.club.email,
      displayName: payload.club.displayName || payload.club.email,
      photoUrl: payload.club.photoURL
    });
  }
}
