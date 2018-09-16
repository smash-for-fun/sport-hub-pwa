import { Action } from '@ngrx/store';
import { LoginActions, LoginActionTypes } from '../actions';
import { UserModel } from '../../../../user/models/user.model';

export interface LoginState {
  loggedIn: boolean;
  user?: UserModel;

}

export const initialState: LoginState = {
  loggedIn: false
};

export function reducer(state = initialState, action: LoginActions): LoginState {
  switch (action.type) {
    case LoginActionTypes.SignedIn:
      return {
        loggedIn: true,
        user: action.user
      };

    case LoginActionTypes.SignedOut:
      return {
        loggedIn: false,
        user: null
      };

    default:
      return state;
  }
}
