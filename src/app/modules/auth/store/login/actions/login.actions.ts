import { LoginSignedInAction } from './login.signed-in.action';
import { LoginSignedOutAction } from './login.signed-out.action';
import { LoginSignUpAction } from './login.sign-up.action';
import { LoginSignInAction } from './login.sign-in.action';
import { LoginSignOutAction } from './login.sign-out.action';

export enum LoginActionTypes {
  SignIn = '[Login] Sign in',
  SignedIn = '[Login] Signed in',
  SignOut = '[Login] Sign out',
  SignedOut = '[Login] Signed out',
  SignUp = '[Login] Sign up'
}


export type LoginActions = LoginSignInAction | LoginSignedInAction | LoginSignOutAction | LoginSignedOutAction | LoginSignUpAction;
