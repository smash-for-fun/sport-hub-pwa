import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { select, Store } from '@ngrx/store';
import { LoginProvider } from '../models';
import { auth } from 'firebase/app';
import * as fromAuth from '../store';
import { LoginSignedInProviderAction } from '../store/login/actions/login.signed-in-provider.action';

@Injectable()
export class AuthService {
  auth$ = this.authStore.pipe(select(fromAuth.loginSelector));

  constructor(
    private afAuth: AngularFireAuth,
    private authStore: Store<fromAuth.AuthState>
  ) {
    this.afAuth.authState.subscribe(loggedInUser => {
      console.log('Loggedin?', loggedInUser);
      if (loggedInUser) {
        this.authStore.dispatch(new LoginSignedInProviderAction({ user: loggedInUser }));
      }
    });
  }

  login(provider: LoginProvider) {
    switch (provider) {
      case LoginProvider.GOOGLE:
        return this.socialLogin(new auth.GoogleAuthProvider());
      case LoginProvider.MAIL:
        return this.emailLogin('test@gmail.com', 'test123');
    }
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }

  private emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  private emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  private socialLogin(selectedProvider) {
    return this.afAuth.auth.signInWithPopup(selectedProvider);
  }
}
