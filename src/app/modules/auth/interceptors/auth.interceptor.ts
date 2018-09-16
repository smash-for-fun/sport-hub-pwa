import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { fromPromise } from 'rxjs/internal-compatibility';
import { switchMap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private afAuth: AngularFireAuth) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return fromPromise(this.afAuth.auth.currentUser.getIdToken()).pipe(
      switchMap(token => {
        req = req.clone({
          setHeaders: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log('Current token', req.headers);

        return next.handle(req);
      })
    );
  }
}
