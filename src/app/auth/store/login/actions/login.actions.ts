import { LoginSignedInAction } from './login.signed-in.action';
import { LoginSignedOutAction } from './login.signed-out.action';
import { LoginSignUpAction } from './login.sign-up.action';
import { LoginSignInAction } from './login.sign-in.action';
import { LoginSignOutAction } from './login.sign-out.action';
import { LoginSignedInProviderAction } from './login.signed-in-provider.action';

export enum LoginActionTypes {
  SignIn = '[Login] Sign in',
  SignedIn = '[Login] Signed in',
  SignedInProvider = '[Login] Signed in via provider',
  SignOut = '[Login] Sign out',
  SignedOut = '[Login] Signed out',
  SignUp = '[Login] Sign up',
}


export type LoginActions =
  LoginSignInAction
  | LoginSignedInAction
  | LoginSignedInProviderAction
  | LoginSignOutAction
  | LoginSignedOutAction
  | LoginSignUpAction;
