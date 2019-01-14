import { Component } from '@angular/core';
import { AuthState, LoginProvider, loginSelector, LoginSignInAction, LoginSignOutAction } from '@app/auth';
import { select, Store } from '@ngrx/store';
import { AppState } from '@app/app.state';

@Component({
  selector: 'app-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrls: ['./shell-header.component.scss']
})
export class ShellHeaderComponent {
  auth$ = this.authStore.pipe(select(loginSelector));

  constructor(
    private authStore: Store<AppState>
  ) {
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
