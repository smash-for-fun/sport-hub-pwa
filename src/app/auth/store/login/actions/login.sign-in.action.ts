import { Action } from '@ngrx/store';
import { LoginActionTypes } from './login.actions';
import { LoginProvider } from '@app/auth/models';

export class LoginSignInAction implements Action {
  readonly type = LoginActionTypes.SignIn;

  provider: LoginProvider;

  constructor(payload: { provider: LoginProvider }) {
    this.provider = payload.provider;
  }
}
