import { Action } from '@ngrx/store';
import { LoginActionTypes } from './login.actions';

export class LoginSignedOutAction implements Action {
  readonly type = LoginActionTypes.SignedOut;
}
