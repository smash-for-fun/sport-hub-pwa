import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { ClubModel } from '../../../models/club.model';
import {
  ClubActionTypes,
  ClubCreateAction,
  ClubDeleteSuccessAction,
  ClubQueryAction,
  ClubUpdateAction,
  ClubUpdateSuccessAction
} from '../actions';
import { ClubSelectSuccessAction } from '../actions/clubs.select-success.action';

@Injectable()
export class ClubEffects {
  location = 'clubs';

  @Effect()
  query$: Observable<Action> = this.actions$.pipe(
    ofType<ClubQueryAction>(ClubActionTypes.QUERY),
    switchMap(action => {
      return this.afs
        .collection<ClubModel>(this.location, ref => ref.where('name', '==', action.query))
        .stateChanges();
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


  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType<ClubCreateAction>(ClubActionTypes.CREATE),
    switchMap(data => {
      console.log('Creating club', data);
      return from(
        this.afs.collection(`${this.location}`).add({
          ...Object.assign(new ClubModel(), data.payload, {
            createdAt: Date.now()
          })
        })
      );
    }),
    // catchError( error => new ClubUpdateFailedAction(error)),
    map(() => new ClubUpdateSuccessAction())
  );


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


  @Effect()
  select$: Observable<Action> = this.actions$.pipe(
    ofType<ClubUpdateAction>(ClubActionTypes.SELECT),
    switchMap(data => {
      return this.afs.doc<ClubModel>(`${this.location}/${data.uid}`).valueChanges();
    }),
    // catchError( error => new ClubUpdateFailedAction(error)),
    map(club => new ClubSelectSuccessAction({ club }))
  );


  constructor(private actions$: Actions, private afs: AngularFirestore) {}
}
