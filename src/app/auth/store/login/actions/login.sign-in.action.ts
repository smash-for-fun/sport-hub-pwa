import { Action } from '@ngrx/store';
import { LoginActionTypes } from './login.actions';
import { UserModel } from '../../../../user/models/user.model';
import { LoginProvider } from '../../../models';

export class LoginSignInAction implements Action {
  readonly type = LoginActionTypes.SignIn;

  provider: LoginProvider;

  constructor(payload: { provider: LoginProvider }) {
    this.provider = payload.provider;
  }
}
