import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { LoginProvider } from '../models';
import { auth } from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) {
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
