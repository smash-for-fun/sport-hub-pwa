import { Action } from '@ngrx/store';
import { LoginActionTypes } from './login.actions';
import { UserModel } from '../../../../user/models/user.model';
import UserCredential = firebase.auth.UserCredential;

export class LoginSignedInAction implements Action {
  readonly type = LoginActionTypes.SignedIn;

  user: UserModel;

  constructor(payload: { credentials: UserCredential }) {
    // Sets user data to firestore on login
    const newUser = new UserModel();

    Object.assign(newUser, {
      email: payload.credentials.user.email,
      displayName: payload.credentials.user.displayName,
      photoURL: payload.credentials.user.photoURL
    });

    this.user = newUser;
  }
}
