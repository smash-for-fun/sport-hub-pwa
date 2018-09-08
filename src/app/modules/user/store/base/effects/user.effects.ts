import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  UserActionTypes,
  UserCreateAction,
  UserDeleteSuccessAction,
  UserQueryAction,
  UserUpdateAction,
  UserUpdateSuccessAction
} from '../actions';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { User } from '../../../models/user';
import { fromPromise } from 'rxjs/internal-compatibility';

import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class UserEffects {

  @Effect()
  query$: Observable<Action> = this.actions$.pipe(
    ofType<UserQueryAction>(UserActionTypes.QUERY),
    switchMap(action => {
      return this.afs.collection<User>('users').stateChanges();
    }),
    mergeMap(actions => actions),
    map(action => {
      return {
        type: `[User] ${action.type}`,
        payload: {
          ...action.payload.doc.data(),
          id: action.payload.doc.id
        }
      };
    })
  );

  // TODO: Catch errors ;)
  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType<UserUpdateAction>(UserActionTypes.UPDATE),
    switchMap(data => {
      const ref = this.afs.doc<User>(`users/${data.id}`);

      return fromPromise(ref.update(data.changes));
    }),
    // catchError( error => new UserUpdateFailedAction(error)),
    map(() => new UserUpdateSuccessAction())
  );

  // TODO: Catch errors ;)
  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType<UserCreateAction>(UserActionTypes.CREATE),
    switchMap(data => {
      return fromPromise(this.afs.collection('users').add({
        ...data.payload,
        updatedAt: this.timestamp,
        createdAt: this.timestamp
      }));
    }),
    // catchError( error => new UserUpdateFailedAction(error)),
    map(() => new UserUpdateSuccessAction())
  );

  // TODO: Catch errors ;)
  @Effect()
  delete$: Observable<Action> = this.actions$.pipe(
    ofType<UserUpdateAction>(UserActionTypes.DELETE),
    switchMap(data => {
      const ref = this.afs.doc<User>(`users/${data.id}`);

      return fromPromise(ref.delete());
    }),
    // catchError( error => new UserUpdateFailedAction(error)),
    map(() => new UserDeleteSuccessAction())
  );

  constructor(private actions$: Actions, private afs: AngularFirestore) {

  }

  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
}
