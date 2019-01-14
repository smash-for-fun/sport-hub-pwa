import { UserModel } from '@app/user';
import { LoginActionTypes, LoginActions } from '../actions';

export interface LoginState {
  loggedIn: boolean;
  user: UserModel;
}

export const initialLoginState: LoginState = {
  loggedIn: false,
  user: null
};

export function loginReducer(state = initialLoginState, action: LoginActions): LoginState {
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
