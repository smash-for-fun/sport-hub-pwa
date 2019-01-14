import {
  LoginSignedInAction,
  LoginSignedInProviderAction,
  LoginSignedOutAction,
  LoginSignInAction,
  LoginSignOutAction,
  LoginSignUpAction
} from '../actions';

export enum LoginActionTypes {
  SignIn = '[Login] Sign in',
  SignedIn = '[Login] Signed in',
  SignedInProvider = '[Login] Signed in via provider',
  SignOut = '[Login] Sign out',
  SignedOut = '[Login] Signed out',
  SignUp = '[Login] Sign up'
}

export type LoginActions =
  | LoginSignInAction
  | LoginSignedInAction
  | LoginSignedInProviderAction
  | LoginSignOutAction
  | LoginSignedOutAction
  | LoginSignUpAction;
