import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as fromAuth from '../store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.AuthState>, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(select(fromAuth.loginSelector)).pipe(
      take(1),
      map(user => user.loggedIn),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
          this.router.navigate(['/user/login']);
        }
      })
    );
  }
}
