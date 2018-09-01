import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { UserQueryAction } from '../actions/user.query.action';
import { UserActionTypes } from '../actions/user.actions';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { User } from '../../models/user';
import { UserUpdateAction } from '../actions/user.update.action';
import { fromPromise } from 'rxjs/internal-compatibility';
import { UserUpdateSuccessAction } from '../actions/user.update-success.action';
import { UserUpdateFailedAction } from '../actions/user.update-failed.action';

import * as firebase from 'firebase';
import { UserCreateAction } from '../actions/user.create.action';

@Injectable()
export class UserEffects {

  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

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
    }),
    tap(action => {
      console.log(action);
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
        createdAt: this.timestamp,
      }));
    }),
    // catchError( error => new UserUpdateFailedAction(error)),
    map(() => new UserUpdateSuccessAction())
  );


  constructor(private actions$: Actions, private afs: AngularFirestore) {

  }
}
