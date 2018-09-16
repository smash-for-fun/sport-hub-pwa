import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, from } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  UserActionTypes,
  UserCreateAction,
  UserDeleteSuccessAction,
  UserQueryAction,
  UserUpdateAction,
  UserUpdateSuccessAction
} from '../actions';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { UserModel } from '../../../models/user.model';
import { fromPromise } from 'rxjs/internal-compatibility';

import { AngularFirestore } from '@angular/fire/firestore';
import { UserSelectSuccessAction } from '../actions/user.select-success.action';
import { LoginActionTypes, LoginSignedInAction, LoginSignUpAction } from '../../../../auth/store/login/actions';

@Injectable()
export class UserEffects {

  @Effect()
  query$: Observable<Action> = this.actions$.pipe(
    ofType<UserQueryAction>(UserActionTypes.QUERY),
    switchMap(action => {
      return this.afs.collection<UserModel>('users').stateChanges();
    }),
    mergeMap(actions => actions),
    map(action => {
      return {
        type: `[User] ${action.type}`,
        payload: {
          ...action.payload.doc.data(),
          uid: action.payload.doc.id
        }
      };
    })
  );

  // TODO: Catch errors ;)
  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType<UserUpdateAction>(UserActionTypes.UPDATE),
    switchMap(data => {
      const ref = this.afs.doc<UserModel>(`users/${data.uid}`);

      return from(ref.update(data.changes));
    }),
    // catchError( error => new UserUpdateFailedAction(error)),
    map(() => new UserUpdateSuccessAction())
  );

  // TODO: Catch errors ;)
  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType<UserCreateAction>(UserActionTypes.CREATE),
    switchMap(data => {
      console.log(data.payload.uid);

      return from(this.afs.collection('users').add({
        ...data.payload
        /*        updatedAt: this.timestamp,
                createdAt: this.timestamp*/
      }));
    }),
    // catchError( error => new UserUpdateFailedAction(error)),
    tap(test => console.log('Testing', test)),
    map(() => new UserUpdateSuccessAction())
  );

  // TODO: Catch errors ;)
  @Effect()
  delete$: Observable<Action> = this.actions$.pipe(
    ofType<UserUpdateAction>(UserActionTypes.DELETE),
    switchMap(data => {
      const ref = this.afs.doc<UserModel>(`users/${data.uid}`);

      return from(ref.delete());
    }),
    // catchError( error => new UserUpdateFailedAction(error)),
    map(() => new UserDeleteSuccessAction())
  );


  // TODO: Catch errors ;)
  @Effect()
  select$: Observable<Action> = this.actions$.pipe(
    ofType<UserUpdateAction>(UserActionTypes.SELECT),
    switchMap(data => {
      return this.afs.doc<UserModel>(`users/${data.uid}`).valueChanges();
    }),
    // catchError( error => new UserUpdateFailedAction(error)),
    map(user => new UserSelectSuccessAction({ user }))
  );


  @Effect()
  checkUserExists$: Observable<Action> = this.actions$.pipe(
    ofType<LoginSignedInAction>(LoginActionTypes.SignedIn),
    switchMap(data => {
      return this.afs.doc<UserModel>(`users/${data.user.uid}`).valueChanges().pipe(map(r => {
        return {
          found: r != null,
          user: data.user
        };
      }));
    }),
    map(userCheck => {
      if (!userCheck.found) {
        return new LoginSignUpAction({ user: userCheck.user });
      }
    })
  );

  @Effect()
  createUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoginSignUpAction>(LoginActionTypes.SignUp),
    switchMap(data => of(new UserCreateAction(data.user)))
  );

  constructor(private actions$: Actions, private afs: AngularFirestore) {

  }


}
