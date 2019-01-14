import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AppState } from '@app/app.state';
import { select, Store } from '@ngrx/store';
import { auth } from 'firebase/app';
import { LoginProvider } from '../models';
import { loginSelector } from '../store/auth.store';
import { LoginSignedInProviderAction } from '../store/login/actions';

@Injectable()
export class AuthService {
  auth$ = this.authStore.pipe(select(loginSelector));

  constructor(private afAuth: AngularFireAuth, private authStore: Store<AppState>) {
    this.afAuth.authState.subscribe(loggedInUser => {
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
