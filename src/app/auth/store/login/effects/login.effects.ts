import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoginActionTypes, LoginSignedOutAction } from '../actions';
import { LoginSignInAction } from '../actions/login.sign-in.action';
import { map, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { AuthService } from '../../../services';
import { LoginSignOutAction } from '../actions/login.sign-out.action';
import { LoginSignedInProviderAction } from '../actions/login.signed-in-provider.action';

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

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {
  }

  private signIn(action: LoginSignInAction) {
    return from(this.authService.login(action.provider))
      .pipe(
        map(provider => new LoginSignedInProviderAction({ user: provider.user }))
      );
  }

  private signOut() {
    return from(this.authService.signOut()).pipe(
      map(() => new LoginSignedOutAction())
    );
  }
}
