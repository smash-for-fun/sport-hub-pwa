import { Action } from '@ngrx/store';
import { LoginActionTypes } from './login.actions';

export class LoginSignOutAction implements Action {
  readonly type = LoginActionTypes.SignOut;
}
