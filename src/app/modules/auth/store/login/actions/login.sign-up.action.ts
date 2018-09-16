import { Action } from '@ngrx/store';
import { LoginActionTypes } from './login.actions';
import { UserModel } from '../../../../user/models/user.model';

export class LoginSignUpAction implements Action {
  readonly type = LoginActionTypes.SignUp;

  user: UserModel;

  constructor(payload: { user: UserModel }) {
    this.user = payload.user;
  }
}
