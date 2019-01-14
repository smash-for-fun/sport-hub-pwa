import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginActionTypes, LoginSignUpAction } from '@app/auth';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import {
  ClubActionTypes,
  ClubCreateAction,
  ClubDeleteSuccessAction,
  ClubQueryAction,
  ClubSelectSuccessAction,
  ClubUpdateAction,
  ClubUpdateSuccessAction
} from '../actions';
import { ClubModel } from './../../../models/club.model';

@Injectable()
export class ClubEffects {
  location = 'clubs';
  @Effect()
  query$: Observable<Action> = this.actions$.pipe(
    ofType<ClubQueryAction>(ClubActionTypes.QUERY),
    switchMap(action => {
      return this.afs.collection<ClubModel>(this.location).stateChanges();
    }),
    mergeMap(actions => actions),
    map(action => {
      return {
        type: `[Club] ${action.type}`,
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
    ofType<ClubUpdateAction>(ClubActionTypes.UPDATE),
    switchMap(data => {
      const ref = this.afs.doc<ClubModel>(`${this.location}/${data.uid}`);

      return from(ref.update(data.changes));
    }),
    // catchError( error => new ClubUpdateFailedAction(error)),
    map(() => new ClubUpdateSuccessAction())
  );
  // TODO: Catch errors ;)
  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType<ClubCreateAction>(ClubActionTypes.CREATE),
    switchMap(data => {
      return from(
        this.afs.doc(`${this.location}/${data.payload.uid}`).set({
          ...Object.assign(new ClubModel(), {
            uid: data.payload.uid
            // email: data.payload.email,
            // photoURL: data.payload.photoURL,
            // displayName: data.payload.displayName
          })
          /*        updatedAt: this.timestamp,
                createdAt: this.timestamp*/
        })
      );
    }),
    // catchError( error => new ClubUpdateFailedAction(error)),
    map(() => new ClubUpdateSuccessAction())
  );
  // TODO: Catch errors ;)
  @Effect()
  delete$: Observable<Action> = this.actions$.pipe(
    ofType<ClubUpdateAction>(ClubActionTypes.DELETE),
    switchMap(data => {
      const ref = this.afs.doc<firebase.User>(`${this.location}/${data.uid}`);

      return from(ref.delete());
    }),
    // catchError( error => new ClubUpdateFailedAction(error)),
    map(() => new ClubDeleteSuccessAction())
  );

  // TODO: Catch errors ;)
  @Effect()
  select$: Observable<Action> = this.actions$.pipe(
    ofType<ClubUpdateAction>(ClubActionTypes.SELECT),
    switchMap(data => {
      return this.afs.doc<firebase.User>(`${this.location}/${data.uid}`).valueChanges();
    }),
    // catchError( error => new ClubUpdateFailedAction(error)),
    map(club => new ClubSelectSuccessAction({ club }))
  );

  @Effect()
  createClub$: Observable<Action> = this.actions$.pipe(
    ofType<LoginSignUpAction>(LoginActionTypes.SignUp),
    switchMap(data => of(new ClubCreateAction(data.user)))
  );
  private const;

  constructor(private actions$: Actions, private afs: AngularFirestore) {}
}
