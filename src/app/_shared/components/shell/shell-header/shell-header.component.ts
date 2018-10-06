import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromAuth from '../../../../auth/store';
import { LoginSignInAction } from '../../../../auth/store/login/actions/login.sign-in.action';
import { LoginProvider } from '../../../../auth/models';
import { LoginSignOutAction } from '../../../../auth/store/login/actions';

@Component({
  selector: 'app-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrls: ['./shell-header.component.scss']
})
export class ShellHeaderComponent {
  auth$ = this.authStore.pipe(select(fromAuth.loginSelector));

  constructor(
    private authStore: Store<fromAuth.AuthState>
  ) {

    this.auth$.subscribe(r => {
      console.log(r);
    });
  }

  loginGoogle() {
    this.authStore.dispatch(new LoginSignInAction({ provider: LoginProvider.GOOGLE }));
  }

  loginEmail() {
    this.authStore.dispatch(new LoginSignInAction({ provider: LoginProvider.MAIL }));
  }

  logout() {
    this.authStore.dispatch(new LoginSignOutAction());
  }

}
