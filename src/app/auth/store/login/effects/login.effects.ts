import { Injectable } from '@angular/core';
import {
  LoginActionTypes,
  LoginSignedInProviderAction,
  LoginSignedOutAction,
  LoginSignInAction,
  LoginSignOutAction
} from '../actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { AuthService } from '@app/auth/services';

@Injectable()
export class LoginEffects {
  @Effect()
  signIn$ = this.actions$.pipe(
    ofType<LoginSignInAction>(LoginActionTypes.SignIn),
    mergeMap(action => this.signIn(action))
  );

  @Effect()
  signOut$ = this.actions$.pipe(
    ofType<LoginSignOutAction>(LoginActionTypes.SignOut),
    mergeMap(() => this.signOut())
  );

  constructor(private actions$: Actions, private authService: AuthService) {}

  private signIn(action: LoginSignInAction) {
    return from(this.authService.login(action.provider)).pipe(
      map(provider => new LoginSignedInProviderAction({ user: provider.user }))
    );
  }

  private signOut() {
    return from(this.authService.signOut()).pipe(map(() => new LoginSignedOutAction()));
  }
}
